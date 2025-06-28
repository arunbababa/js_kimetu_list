// ローディング実装
const handleLoading = ((isLoading) => {
    if (isLoading) {
        const loadingElement = document.createElement('p')
        loadingElement.textContent = '取得中です...少々お待ちください'

        const loadingContainer = document.getElementById('loading')
        loadingContainer.appendChild(loadingElement)
    }
    if (!isLoading) {
        const loadingContainer = document.getElementById('loading')
        loadingContainer.innerHTML = ''
    }
})

// キャラデータ取得関数
const fetchCharacter = async (e) => {
    try {
        // eの値のあるなしで初回ローディングかどうかを判定しています
        handleLoading(true)
        if (e.target.value) {
            const res = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${e.target.value}.json`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();

            const fetchDataContainer = document.getElementById('fetch-data-container')
            fetchDataContainer.innerHTML = ''
            data.forEach(item => {
                const characterElement = document.createElement('div')
                characterElement.innerHTML = `
            <h2>${item.name}</h2>
            <img src="https://ihatov08.github.io${item.image}" alt="arunbababa">
            <p>${item.category}</p>
            `
                fetchDataContainer.appendChild(characterElement)
            })
        }
        else {
            const res = await fetch(`https://ihatov08.github.io/kimetsu_api/api/all.json`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();

            const fetchDataContainer = document.getElementById('fetch-data-container')
            fetchDataContainer.innerHTML = ''
            data.forEach(item => {
                const characterElement = document.createElement('div')
                characterElement.innerHTML = `
            <h2>${item.name}</h2>
            <img src="https://ihatov08.github.io${item.image}" alt="arunbababa">
            <p>${item.category}</p>
            `
                fetchDataContainer.appendChild(characterElement)
            })
        }

    } catch (err) {
        console.error('データ取得エラー:', err);
    } finally {
        handleLoading(false)
    }
}

// 全キャラクター
const ALL_RADIO = document.getElementById('all');
window.addEventListener('DOMContentLoaded', fetchCharacter); // ローディング時に実行
ALL_RADIO.addEventListener('click', fetchCharacter);

// 鬼殺隊
const DEVILHUNTER_RADIO = document.getElementById('kisatsutai');
DEVILHUNTER_RADIO.addEventListener('click', fetchCharacter);

// 柱
const HASHIRA_RADIO = document.getElementById('hashira');
HASHIRA_RADIO.addEventListener('click', fetchCharacter);

// 鬼
const DEVIL_RADIO = document.getElementById('oni');
DEVIL_RADIO.addEventListener('click', fetchCharacter);