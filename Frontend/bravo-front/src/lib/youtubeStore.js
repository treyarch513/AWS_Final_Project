// /bravo-front/src/lib/youtubeStore.js
import { writable, get } from 'svelte/store';

// ✅ YouTube API 키 목록 (백엔드로 이전할 예정이지만, 프론트엔드에서 참조할 필요가 있다면 유지)
export const youtubeApiKeys = [
	'AIzaSyAwcUsgAODlJAndOnlnYKqbGGtnjS_L61E',
	'AIzaSyDjf1hY6e6IOQYz92SErP4QWWD_dLWU6Mg',
	'AIzaSyB13uyTh3SCMhfAB7RNjJq8HBwe61wpqU0',
	'AIzaSyBGPRpwt-kaZV4THET0AYyxo8w0AZ7DQ9E',
	'AIzaSyAybmmX582Mt6HJa8VGTPRHABl8vHh_euk'
];

// ✅ 현재 API 키를 관리하는 스토어
export const currentApiKeyIndex = writable(0);
export const youtubeApiKey = writable(youtubeApiKeys[0]);

// ✅ 2분마다 API 키 변경 (백엔드에서 관리하므로 프론트엔드에서는 사용하지 않아도 됨)
function rotateApiKey() {
	currentApiKeyIndex.update((n) => (n + 1) % youtubeApiKeys.length);
	const newIndex = get(currentApiKeyIndex);
	youtubeApiKey.set(youtubeApiKeys[newIndex]);
	console.log(`🔄 ${newIndex + 1}번째 YouTube API vvmfhsxm키 변경됨: ${youtubeApiKeys[newIndex]}`);
}
