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
        handleLoading(true)
        const res = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${e.target.value ?? "all"}.json`);
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

const radioButtons = document.getElementsByName('kimetu');
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', fetchCharacter)
})
window.addEventListener('DOMContentLoaded', fetchCharacter); // ローディング時に実行