class HeaderNav extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get nowPlaying() {
    return this.shadow.querySelector('#nowPlaying');
  }

  get topRated() {
    return this.shadow.querySelector('#topRated');
  }

  get popular() {
    return this.shadow.querySelector('#popular');
  }

  get upcoming() {
    return this.shadow.querySelector('#upcoming');
  }

  render() {
    this.shadow.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
                
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 40px;
                    background-color: black;
                    color: white;
                }
                
                .nav-logo {
                    font-size: 1.5rem;
                    color: white;
                    font-weight: 300;
                    text-decoration: none;
                }
                
                .nav-logo span {
                    font-weight: 700;
                }
                
                .nav-menu {
                    display: flex;
                    list-style: none;
                }
                
                .nav-item {
                    margin-left: 100px;
                    text-transform: uppercase;
                    font-weight: 300;
                    cursor: pointer;
                    transition: all .3s ease;
                }
                
                .nav-item:hover {
                    opacity: 0.8;
                }

                @media (max-width: 1200px) {
                    .navbar {
                        padding: 20px 40px;
                    }
                    
                    .nav-logo {
                        font-size: 1.4rem;
                    }
                    
                    .nav-item {
                        margin-left: 80px;
                    }
                }
                
                @media (max-width: 992px) {
                    .navbar {
                        padding: 20px 40px;
                    }
                    
                    .nav-logo {
                        font-size: 1.2rem;
                    }
                    
                    .nav-item {
                        margin-left: 40px;
                    }
                }
                
                @media (max-width: 768px) {
                    .navbar {
                        padding: 0;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                
                    .nav-logo {
                        padding: 15px 30px;
                    }
                    
                    .nav-menu {
                        display: flex;
                        flex-direction: column;
                        background-color: #202020;
                        width: 100%;
                    }
                    
                    .nav-item {
                        padding: 15px 30px;
                        margin-left: 0;
                        border-top: 1px solid #545454;
                    }
                }
            </style>

            <nav class="navbar">
                <a href="" class="nav-logo"><span>plotwist</span>|Movie Theater</a>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <p id="nowPlaying">Now Playing</p>
                    </li>
                    <li class="nav-item">
                        <p id="topRated">Top Rated</p>
                    </li>
                    <li class="nav-item">
                        <p id="popular">Popular</p>
                    </li>
                    <li class="nav-item">
                        <p id="upcoming">Upcoming</p>
                    </li>
                </ul>
            </nav>
        `;
  }
}

customElements.define('header-nav', HeaderNav);
