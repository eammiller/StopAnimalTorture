import logo from "../logo.png";
import styled from "styled-components";


function Head() {

  return (
    <Header>
      	<header class="header">
		<img src={logo} alt="" class="logo" />
      <ul class="main-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
      </ul>
	</header> 
    </Header>
  );
}

export default Head;

const Header = styled.nav`
  
	box-sizing: border-box;

body {
	line-height: 1.6;
	margin: 0;
	min-height: 100vh;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}


h2,
h3,
a {
	color: #34495e;
}

a {
	text-decoration: none;
}



.logo {
	margin: 0;
}

.main-nav {
	margin-top: 5px;

}
.logo a,
.main-nav a {
	padding: 10px 15px;
	text-transform: uppercase;
	text-align: center;
	display: block;
}

.main-nav a {
	color: #34495e;
	font-size: 14px;
}

.main-nav a:hover {
	color: #718daa;
}



.header {
	margin-bottom:12px;
	
	
}


/* ================================= 
  Media Queries
==================================== */




@media (min-width: 369px) {
	.header,
	.main-nav {
		display: flex;
	}
	.header {
		flex-direction: column;
		align-items: center;
    	.header{
		width: 80%;
		margin: 0 auto;
		max-width: 1150px;
	}
	}

}

@media (min-width: 1025px) {
	.header {
		flex-direction: row;
		justify-content: space-between;
	}

}

`;
