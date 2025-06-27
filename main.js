// 前データのクリアも各かんすうの前にセット

// ローディング実装
const handleLoading = ((isLoading) => {
    if (isLoading){
        const loadingElement = document.createElement('p')
        loadingElement.textContent = '取得中です...少々お待ちください'

        const loadingContainer = document.getElementById('loading')
        loadingContainer.appendChild(loadingElement)
    }
    if (!isLoading){
        const loadingContainer = document.getElementById('loading')
        loadingContainer.innerHTML = ''
    }
})

const fetchAllCharacter = async () => {
    handleLoading(true)
    try {
        const res = await fetch('https://ihatov08.github.io/kimetsu_api/api/all.json');
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
    } catch (err) {
        console.error('データ取得エラー:', err);
    } finally {
        handleLoading(false)
    }
}

// 全キャラクター
const ALL_RADIO = document.getElementById('all');
window.addEventListener('DOMContentLoaded', fetchAllCharacter);
ALL_RADIO.addEventListener('click', fetchAllCharacter);

// 鬼殺隊
const DEVILHUNTER_RADIO = document.getElementById('devil-hunter');
DEVILHUNTER_RADIO.addEventListener('click', async () => {
    try {
        handleLoading(true)
        const res = await fetch('https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json');
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
    } catch (err) {
        console.error('データ取得エラー:', err);
    } finally {
        handleLoading(false)
    }
});

// 柱
const HASHIRA_RADIO = document.getElementById('hashira');
HASHIRA_RADIO.addEventListener('click', async () => {
    try {
        handleLoading(true)
        const res = await fetch('https://ihatov08.github.io/kimetsu_api/api/hashira.json');
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
    } catch (err) {
        console.error('データ取得エラー:', err);
    } finally {
        handleLoading(false)
    }
});

// 鬼
const DEVIL_RADIO = document.getElementById('oni');
DEVIL_RADIO.addEventListener('click', async () => {
    try {
        handleLoading(true)
        const res = await fetch('https://ihatov08.github.io/kimetsu_api/api/oni.json');
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
    } catch (err) {
        console.error('データ取得エラー:', err);
    } finally {
        handleLoading(false)
    }
});