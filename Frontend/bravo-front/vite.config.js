import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// 여기에 ngrok 호스트를 추가합니다.
		host: true,
      port: 5174,
		proxy: { // auth-service (로그인/토큰)
      // Auth Service: 구글 로그인/콜백 관련 API
      '/api/google': {
        target: 'http://auth-service:3001',
        changeOrigin: true
      },
      // Search Service: Spotify 검색 API (여기서 /api/spotify/search로 호출하는 경우)
      '/api/spotify/': {
        target: 'http://search-service:3002',
        changeOrigin: true
      },
      // Search Service: YouTube 검색 API (트랙 재생 관련)
      '/api/youtube/': {
        target: 'http://search-service:3002',
        changeOrigin: true
      },
      // Search Service: Track 저장/조회 기능
      '/api/track': {
        target: 'http://search-service:3002',
        changeOrigin: true
      },
      // Playlist Service: 플레이리스트 CRUD 기능
      '/api/playlist': {
        target: 'http://playlist-service:3005',
        changeOrigin: true
      },
      // Lyrics Service: 가사 조회
      '/api/lyrics': {
        target: 'http://lyrics-service:3003',
        changeOrigin: true
      },
      // Translation Service: 가사 번역
      '/api/translate': {
        target: 'http://translation-service:3004',
        changeOrigin: true
      }
    },
    // ngrok 등 외부 접근 시 필요한 설정
    allowedHosts: ['valid-elephant-separately.ngrok-free.app']
  }
});
