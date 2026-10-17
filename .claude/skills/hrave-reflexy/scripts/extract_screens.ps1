# Downloads each Stitch screen's HTML (from a saved `list_screens` MCP result) and writes a
# plain-text version next to it, with Material Symbols rendered as [icon:name].
# Usage: & extract_screens.ps1 -ScreensJson <file> -OutDir <dir>
param(
  [Parameter(Mandatory)][string]$ScreensJson,
  [Parameter(Mandatory)][string]$OutDir
)
New-Item -ItemType Directory -Force $OutDir | Out-Null
$data = Get-Content -Raw -Encoding utf8 $ScreensJson | ConvertFrom-Json
$screens = if ($data.screens) { $data.screens } else { $data }

$i = 0
foreach ($s in $screens) {
  $i++
  $url = $s.htmlCode.downloadUrl
  if (-not $url) { continue }
  $id = ($s.name -split '/')[-1]
  $slug = ($s.title -replace '[^\p{L}\p{Nd}]+', '-').Trim('-').ToLower()
  if ($slug.Length -gt 40) { $slug = $slug.Substring(0, 40) }
  $base = Join-Path $OutDir ('{0:D2}-{1}-{2}' -f $i, $slug, $id.Substring(0, 6))
  try { Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile "$base.html" }
  catch { "FAIL $($s.title): $_"; continue }

  $raw = Get-Content -Raw -Encoding utf8 "$base.html"
  $t = $raw -replace '(?s)<script.*?</script>', '' -replace '(?s)<style.*?</style>', '' -replace '(?s)<head.*?</head>', ''
  $t = $t -replace '(?s)<span[^>]*material-symbols[^>]*>\s*([^<]*?)\s*</span>', '[icon:$1]'
  $t = $t -replace '<[^>]+>', "`n" -replace '&nbsp;', ' ' -replace '&amp;', '&' -replace '&quot;', '"'
  $lines = $t -split "`n" | ForEach-Object { $_.Trim() } | Where-Object { $_ }
  Set-Content -Encoding utf8 "$base.txt" (@("# $($s.title)", "# $($s.name)") + $lines)
  "{0} ({1} lines)" -f $s.title, $lines.Count
}
