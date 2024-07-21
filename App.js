import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source = {{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff338495-b0e4-459b-9605-ecec2131df30/dc64sy5-25f9e302-2810-4b67-845c-4104d1bbbb5f.png/v1/fill/w_1280,h_1819/messi_png_by_flashdsg_dc64sy5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxOSIsInBhdGgiOiJcL2ZcL2ZmMzM4NDk1LWIwZTQtNDU5Yi05NjA1LWVjZWMyMTMxZGYzMFwvZGM2NHN5NS0yNWY5ZTMwMi0yODEwLTRiNjctODQ1Yy00MTA0ZDFiYmJiNWYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.X5IqSJX1CH9ymTqppoDKOG2bBIB6I8V-RgQYqqz0mVs"}}
          style={{
            width: 215,
            height: 297
          }}
        />
      <Text>Welcom to FC-Tourney!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
