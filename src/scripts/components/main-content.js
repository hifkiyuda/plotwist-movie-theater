import hero from '../../assets/images/hero-image.jpg';

class MainContent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get contentPage() {
    return this.shadow.querySelector('.content-page');
  }

  get contentHeading() {
    return this.shadow.querySelector('#contentHeading');
  }

  get contentText() {
    return this.shadow.querySelector('#contentText');
  }

  get moviesList() {
    return this.shadow.querySelector('.movies-list');
  }

  render() {
    this.shadow.innerHTML = `
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }

            .welcome-page {
                padding: 20px 100px;
                height: 60vh;
                background-image: url(${hero});
                background-size: cover;
                background-position: top;
                background-repeat: no-repeat;
            }
            
            .welcome-page h1,
            .welcome-page p {
                color: white;
            }
            
            .welcome-title {
                font-size: 5rem;
                margin-top: 100px;
                font-weight: 900;
            }
            
            .welcome-desc {
                font-size: 1.5rem;
                font-weight: 300;
                text-shadow: 2px  2px 2px black;
            }
            
            .content-page {
                padding: 40px 100px 100px 100px;
            }
            
            .poster-path {
                width: 100%;
            }
            
            .movies-list {
                display: grid;
                grid-template-columns: auto auto auto auto auto;
                gap: 20px;
                margin-top: 20px;
            }
            
            .content-heading {
                font-weight: 900;
                margin-bottom: 10px;
            }

            .poster-path {
                transition: all .6s ease;
            }

            .poster-path:hover {
                transform: scale(1.02);
                opacity: 0.6;
            }

            .content-text {
                font-size: 1.2rem;
                margin-bottom: 40px;
            }

            @media (max-width: 1200px) {
                .welcome-page {
                    padding: 20px 80px;
                }
                
                .welcome-title {
                    font-size: 4rem;
                    margin-top: 100px;
                }
                
                .welcome-desc {
                    font-size: 1.3rem;
                }
            
                .content-page {
                    padding: 40px 80px 80px 80px;
                }
            }
            
            @media (max-width: 992px) {
                .welcome-page {
                    padding: 20px 60px;
                }
                
                .welcome-title {
                    font-size: 3.5rem;
                    margin-top: 80px;
                }
                
                .welcome-desc {
                    font-size: 1.3rem;
                }

                .content-page {
                    padding: 40px 60px 60px 60px;
                }
            
                .movies-list {
                    grid-template-columns: auto auto auto auto;
                    gap: 20px;
                }
            }
            
            @media (max-width: 768px) {
                .welcome-page {
                    padding: 20px 40px;
                    height: 40vh;
                }
                
                .welcome-title {
                    font-size: 3rem;
                }
                
                .welcome-desc {
                    font-size: 1.2rem;
                }

                .content-page {
                    padding: 40px;
                }
            
                .movies-list {
                    grid-template-columns: auto auto auto;
                    gap: 20px;
                }
            }
            
            @media (max-width: 576px) {
                .welcome-page {
                    padding: 20px 20px;
                    height: 40vh;
                }
                
                .welcome-title {
                    font-size: 3rem;
                    margin-top: 60px;
                }
            
                .content-page {
                    padding: 40px 20px;
                }
            
                .movies-list {
                    grid-template-columns: auto auto;
                    gap: 20px;
                }
            }
            
            @media (max-width: 280px) {
                .welcome-page {
                    height: 50vh;
                }

                .movie-page {
                    padding: 10px 20px 20px 20px;
                }
            }
        </style>
            <div class="welcome-page">
                <h1 class="welcome-title">Welcome to plotwist!</h1>
                <p class="welcome-desc">
                    Provides the latest and most popular movies around the world. Find the movie you're looking for here.
                </p>
            </div>
            <div class="content-page">
                <h1 class="content-heading" id="contentHeading">Now Playing</h1>
                <p class="content-text" id="contentText">Find out what movies are showing right now.</p>
                <div id="movieList" class="movies-list"></div>
            </div>
        `;
  }
}

customElements.define('main-content', MainContent);
