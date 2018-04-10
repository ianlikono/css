import React from 'react';

export default () => (
  <div>
    <header>
      <a href="">Nav Left</a>
      <a href="">Nav Right</a>
    </header>
    <main>
      <article>MAIN CONTENT</article>
      <nav>SIDE NAV</nav>
      <aside>ASIDE</aside>
    </main>
    <footer>Music Playlist</footer>

    <style jsx>
      {`
				div {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					margin: 0;
					-webkit-box-orient: vertical;
					-webkit-box-direction: normal;
					-ms-flex-direction: column;
					flex-direction: column;
					min-height: 100vh;
					background: #2c3e50;
					font-family: Helvetica;
				}

				a {
					text-decoration: none;
					color: black;
				}

				header {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-pack: justify;
					-ms-flex-pack: justify;
					justify-content: space-between;
					-webkit-box-align: center;
					-ms-flex-align: center;
					align-items: center;
				}

				main > *,
				header,
				footer {
					margin: 4px;
					padding: 5px;
					border-radius: 7px;
				}

				main {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-ms-flex-preferred-size: 800px;
					flex-basis: 800px;
				}

				article {
					-webkit-box-flex: 4;
					-ms-flex: 4 0 60%;
					flex: 4 0 60%;
					background: #ecf0f1;
				}

				nav {
					-webkit-box-flex: 1;
					-ms-flex: 1 1 20%;
					flex: 1 1 20%;
					background: #95a5a6;
					-webkit-box-ordinal-group: 0;
					-ms-flex-order: -1;
					order: -1;
				}

				aside {
					-webkit-box-flex: 1;
					-ms-flex: 1 1 20%;
					flex: 1 1 20%;
					background: #3498db;
				}

				header,
				footer {
					background: #1abc9c;
					-ms-flex-preferred-size: 100px;
					flex-basis: 100px;
				}

				@media all and (max-width: 640px) {
					main {
						-webkit-box-orient: vertical;
						-webkit-box-direction: normal;
						-ms-flex-direction: column;
						flex-direction: column;
						-webkit-box-flex: 1;
						-ms-flex-positive: 1;
						flex-grow: 1;
					}

					nav {
						-webkit-box-ordinal-group: 1;
						-ms-flex-order: 0;
						order: 0;
					}
					header,
					footer {
						-ms-flex-preferred-size: 50px;
						flex-basis: 50px;
					}
				}
			`}
    </style>
  </div>
);
