# Spustí Android emulátor a posune jeho okno tak, aby bylo celé vidět.
# (Na obrazovce s Windows škálováním se okno jinak otevírá napůl nad horním okrajem.)
# Výchozí je odlehčený telefon (Android 13 bez služeb Google, 720×1280, 1,5 GB RAM) –
# počítač má jen 8 GB RAM, na kterých se těžší emulátor zasekával.
param([string]$Avd = "Light_Phone_API_33")

$sdk = if ($env:ANDROID_HOME) { $env:ANDROID_HOME } else { "$env:LOCALAPPDATA\Android\Sdk" }

Add-Type @"
using System; using System.Runtime.InteropServices; using System.Text; using System.Collections.Generic;
public class EmuWin {
  public delegate bool EnumProc(IntPtr h, IntPtr l);
  [DllImport("user32.dll")] static extern bool EnumWindows(EnumProc f, IntPtr l);
  [DllImport("user32.dll")] static extern uint GetWindowThreadProcessId(IntPtr h, out uint pid);
  [DllImport("user32.dll")] static extern bool IsWindowVisible(IntPtr h);
  [DllImport("user32.dll")] static extern int GetWindowText(IntPtr h, StringBuilder s, int n);
  [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
  [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr a, int x, int y, int cx, int cy, uint f);
  [StructLayout(LayoutKind.Sequential)] public struct RECT { public int L, T, R, B; }
  public static Dictionary<string, IntPtr> For(int pid) {
    var res = new Dictionary<string, IntPtr>();
    EnumWindows((h, l) => {
      uint p; GetWindowThreadProcessId(h, out p);
      if (p == pid && IsWindowVisible(h)) { var sb = new StringBuilder(256); GetWindowText(h, sb, 256); res[sb.ToString()] = h; }
      return true;
    }, IntPtr.Zero);
    return res;
  }
}
"@

if (-not (Get-Process -Name "qemu-system-*" -ErrorAction SilentlyContinue)) {
  Write-Host "Spouštím emulátor $Avd..."
  # -no-snapshot: vždy čistý start, aby se neobnovil zaseknutý stav z minula.
  Start-Process "$sdk\emulator\emulator.exe" -ArgumentList "-avd", $Avd, "-no-snapshot", "-no-boot-anim"
}

# Počkat, než se objeví hlavní okno emulátoru.
$main = $null
for ($i = 0; $i -lt 60 -and -not $main; $i++) {
  Start-Sleep -Seconds 1
  $proc = Get-Process -Name "qemu-system-*" -ErrorAction SilentlyContinue | Select-Object -First 1
  if ($proc) {
    $wins = [EmuWin]::For($proc.Id)
    $main = $wins.Keys | Where-Object { $_ -like "Android Emulator*" } | ForEach-Object { $wins[$_] } | Select-Object -First 1
  }
}
if (-not $main) { Write-Host "Okno emulátoru se neobjevilo."; exit 1 }
Start-Sleep -Seconds 2

# Zmenšit okno na výšku pracovní plochy a posunout ho do levého horního rohu
# (lišta s tlačítky se posune s ním).
Add-Type -AssemblyName System.Windows.Forms
$work = [System.Windows.Forms.Screen]::PrimaryScreen.WorkingArea
$r = New-Object EmuWin+RECT
[void][EmuWin]::GetWindowRect($main, [ref]$r)
$h = [Math]::Min($r.B - $r.T, $work.Height - 20)
$w = [int](($r.R - $r.L) * $h / ($r.B - $r.T))
[void][EmuWin]::SetWindowPos($main, [IntPtr]::Zero, $work.X + 10, $work.Y + 10, $w, $h, 0x0004)

# Případné dialogy emulátoru (např. "Compatibility Warnings") přesunout doprostřed obrazovky.
foreach ($title in $wins.Keys | Where-Object { $_ -and $_ -ne "Emulator" -and $_ -notlike "Android Emulator*" }) {
  [void][EmuWin]::SetWindowPos($wins[$title], [IntPtr]::Zero, $work.X + [int]($work.Width / 3), $work.Y + [int]($work.Height / 3), 0, 0, 0x0005)
}

Write-Host "Emulátor je připravený. Teď spusť 'npm start' a zmáčkni 'a'."
