class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set darkEvent(event) {
    this.event = event;
    this.render();
  }

  set insertText(text) {
    this.text = text;
    this.render();
  }

  set insertClock(clock) {
    this.clock = clock;
    this.render();
  }

  get value() {
    return this.shadow.querySelector('.clock');
  }

  render() {
    this.shadow.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                .footer-info {
                    padding: 50px 100px;
                    background-color: #202020;
                    color: white;
                }
                
                .footer-info p,
                .footer-info a {
                    line-height: 200%;
                    font-weight: 300;
                }
                
                .link {
                    color: #00c3ff;
                    text-decoration: none;
                }
                
                .foot-logo {
                    font-size: 1.5rem;
                    color: white;
                    font-weight: 300;
                    text-decoration: none;
                }
                
                .foot-logo span {
                    font-weight: 700;
                }
                
                .footer-bottom {
                    padding: 20px 100px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #202020;
                    color: white;
                    font-weight: 300;
                }
                
                .dark {
                    display: flex;
                    align-items: center;
                }
                
                .dark-button {
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background-color: white;
                    margin-right: 10px;
                    transition: all .3s ease;
                    border: none;
                    cursor: pointer;
                }
                
                .dark-button:hover {
                    transform: scale(1.2);
                }

                @media (max-width: 1200px) {
                    .footer-info {
                        padding: 50px 80px;
                    }
                
                    .foot-logo {
                        font-size: 1.4rem;
                    }
                
                    .footer-bottom {
                        padding: 20px 80px;
                    }
                
                    .dark-button {
                        height: 25px;
                        width: 25px;
                    }
                }
                
                @media (max-width: 992px) {
                    .footer-info {
                        padding: 50px 60px;
                    }
                
                    .foot-logo {
                        font-size: 1.2rem;
                    }
                
                    .footer-bottom {
                        padding: 20px 60px;
                    }
                }
                
                @media (max-width: 768px) {
                    .footer-info {
                        padding: 50px 40px;
                    }
                
                    .footer-bottom {
                        padding: 20px 40px;
                    }
                }
                
                @media (max-width: 576px) {
                    .footer-info {
                        padding: 50px 20px;
                    }
                
                    .footer-bottom {
                        padding: 20px 20px;
                    }
                }
                
                @media (max-width: 280px) {
                    .link {
                        font-size: 11px;
                    }
                }
            </style>
            <div class="footer-info">
                <a href="" class="foot-logo"><span>plotwist</span>|Movie Theater</a>
                <br>
                <br>
                <p>created by Hifki Yuda Pratama, for BFFWB class submission</p>
                <p>using TMDb web API</p>
                <a class="link" href="https://www.themoviedb.org/documentation/api" target="_blank">https://www.themoviedb.org/documentation/api</a>
                <br>
                <a class="link" href="https://github.com/hifkiyuda/" target="_blank">My Github</a>
            </div>
            <div class="footer-bottom">
                <div class="dark">
                    <button class="dark-button"></button>
                    <p>← click for <span class="button-mode">dark</span> mode</p>
                </div>
                <div class="clock">${this.clock}</div>
            </div>
        `;

    this.shadow.querySelector('.dark-button').addEventListener('click', this.event);
    this.shadow.querySelector('.button-mode').innerHTML = this.text;
  }
}

customElements.define('footer-bar', FooterBar);
