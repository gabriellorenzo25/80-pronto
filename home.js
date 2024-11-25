   document.addEventListener("DOMContentLoaded", function () {
        console.log("Script carregado com sucesso");
    
        // Configuração do carrossel
        const track = document.querySelector(".carousel-track");
        if (track) {
            const items = document.querySelectorAll(".carousel-item");
            const totalItems = items.length;
            const itemWidth = items[0].offsetWidth + 15; // largura do item + margem
            let currentIndex = 0;
    
            function updateCarousel() {
                const distanceToMove = currentIndex * itemWidth;
                track.style.transform = `translateX(-${distanceToMove}px)`;
            }
    
            document.getElementById("nextBtn").addEventListener("click", function () {
                if (currentIndex < totalItems - 3) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                updateCarousel();
            });
    
            document.getElementById("prevBtn").addEventListener("click", function () {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = totalItems - 3;
                }
                updateCarousel();
            });
    
            items.forEach((item) => {
                item.addEventListener("click", function () {
                    const page = item.getAttribute("data-page");
                    if (page) {
                        window.location.href = page;
                    }
                });
            });
        } else {
            console.log("Carrossel não está presente nesta página.");
        }
    
        // Configuração do campo de pesquisa
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            const pages = {
                "home": "index.html",
                "sobre": "sobre.html",
                "roteador wifi": "roteador-wifi.html",
                "cabo de rede": "cabo-rede.html",
                "cabo sata": "cabo-sata.html",
                "cabo vga": "cabo-vga.html",
                "cabo de alimentação": "cabo-alimentação.html",
                "leitor de cd": "leitor-cd.html",
                "processador": "processador.html",
                "memoria ram": "memoria-ram.html",
                "disquete": "disquete.html",
                "hd (hard disc)": "hd-Memória.html",
                "placa de vídeo": "placa-video.html",
                "raspberry": "raspberry.html",
                "placa mãe": "placa-mãe.html",
                "fonte de energia": "fonte_de_energia.html",
                "cooler": "cooler.html"
            };
    
            function performSearch() {
                const query = searchInput.value.toLowerCase();
                for (const [key, value] of Object.entries(pages)) {
                    if (key.includes(query)) {
                        window.location.href = value;
                        return;
                    }
                }
                alert("Componente não encontrado.");
            }
    
            searchInput.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    performSearch();
                }
            });
        } else {
            console.log("Campo de pesquisa não está presente nesta página.");
        }
    
        // Menu para celular
        const menuToggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".navbar .menu");
        if (menuToggle && menu) {
            menuToggle.addEventListener("click", function () {
                menu.classList.toggle("open");
            });
    
            document.addEventListener("click", function (event) {
                if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                    menu.classList.remove("open");
                }
            });
        }
    });
    