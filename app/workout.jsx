import { StyleSheet, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useVideoPlayer, VideoView } from 'expo-video'
import { useEvent, useEventListener } from 'expo'
import { useColors, fonts, spacing, radius } from '../constants/theme'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

// Today's exercise videos, played in this order
const videos = [
  require('../assets/videos/testcvik1.mp4'),
  require('../assets/videos/testcvik2.mp4'),
  require('../assets/videos/testcvik3.mp4'),
]

const WorkoutScreen = () => {
  const colors = useColors()
  const styles = getStyles(colors)

  // Which exercise is playing now (0 = first)
  const [index, setIndex] = useState(0)

  // Video player
  const player = useVideoPlayer(videos[0], (player) => {
    player.loop = false
    player.timeUpdateEventInterval = 0.25
    player.play()
  })

  // true while the video is playing, false when paused or ended
  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  })

  // Current time of the video in seconds, updated 4 times per second
  const { currentTime } = useEvent(player, 'timeUpdate', {
    currentTime: player.currentTime,
  })

  // How much of the video has played: 0 = start, 1 = end
  const progress = player.duration > 0 ? currentTime / player.duration : 0

  // Play the current exercise again from the start
  const restart = () => {
    player.replay()
    player.play()
  }

  // Pause when playing, play when paused
  const togglePlay = () => {
    if (isPlaying) {
      player.pause()
    } else {
      player.play()
    }
  }

  // Next exercise, or the done screen after the last one
  const goNext = async () => {
    const nextIndex = index + 1

    if (nextIndex >= videos.length) {
      router.push('/done')
      return
    }

    setIndex(nextIndex)
    await player.replaceAsync(videos[nextIndex])
    player.play()
  }

  // When a video ends, play the next one
  useEventListener(player, 'playToEnd', () => {
    goNext()
  })

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.counter}>
        Cvik {index + 1} ze {videos.length}
      </ThemedText>

      <VideoView style={styles.video} player={player} nativeControls={false} />

      <View style={styles.controls}>
        <Pressable
          style={styles.button}
          onPress={restart}
          accessibilityLabel="Znovu od začátku"
        >
          <Ionicons name="refresh" size={28} color={colors.onPrimary} />
        </Pressable>

        <Pressable
          style={[styles.button, styles.playButton]}
          onPress={togglePlay}
          accessibilityLabel={isPlaying ? 'Pozastavit' : 'Přehrát'}
        >
          <View style={[styles.progress, { width: `${progress * 100}%` }]} />
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={28}
            color={colors.text}
          />
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={goNext}
          accessibilityLabel="Další cvik"
        >
          <Ionicons
            name="play-skip-forward"
            size={28}
            color={colors.onPrimary}
          />
        </Pressable>
      </View>
    </ThemedView>
  )
}

export default WorkoutScreen

const getStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    counter: {
      paddingTop: spacing.md,
      fontFamily: fonts.bold,
      fontSize: 15,
    },
    video: {
      width: '100%',
      aspectRatio: 16 / 9,
      marginTop: spacing.md,
      borderRadius: radius.default,
    },
    controls: {
      flexDirection: 'row',
      gap: spacing.sm,
      marginTop: spacing.lg,
    },
    button: {
      width: 56,
      minHeight: 56,
      borderRadius: radius.pill,
      backgroundColor: palette.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    playButton: {
      flex: 1,
      backgroundColor: palette.mutedSurface,
      overflow: 'hidden',
    },
    progress: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      backgroundColor: palette.primary,
    },

  })
