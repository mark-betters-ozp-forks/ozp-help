// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },
	
render: function(){return ( 
<div>

<h1>Getting Started with OZONE</h1>
<p>OZONE is an ecosystem of software that enables users from numerous organizations to share data and manipulate it solely within browser memory. It comprises three specific products that interact using inter-widget communication (IWC). Each product performs a specific task:</p>

<iframe width="560"
  height="315"
  src="https://www.youtube.com/embed/vnXb1S6l_jE"
  frameBorder="0" allowfullscreen title="TUTORIAL 2 - Three Components">
</iframe>
<br /><br />


<h3><a href="HUD_overview.html">HUD</a></h3>
<p>An organizational display that houses applications users find in Center and want to store in their local environment. Think of it like a repository of bookmarks in your Internet browser.</p>
<img alt="HUD Home Screen" src="Doc_images/HUD_home.png" title="HUD Home Screen" />

<br />
<h3><a href="Center_overview.html">Center</a></h3>
<p>A store, similar to a commercial application store like Apple's App Store or Google Play. Use it to search for and bookmark applications to use in your instance of OZONE</p>
<img alt="Center Home Screen" src="Doc_images/center-search-and-discovery-page.png"  title="Center Home Screen" />

<br />
<h3><a href="Webtop_overview.html">Webtop</a></h3>
<p>The framework where applications run and interact with each other. Webtop creates an environment where OZONE compatible applications can share a virtual network and core services that solely exist within the browser's memory.</p>
<img alt="Webtop Home Screen" src="Doc_images/Webtop.png" title="Webtop Home Screen" />

<br />
<h3>IWC</h3>
<p>The technology widgets use to communicate with each other within a brower without sending data back to their respective servers.</p>


	</div>
	);
	}
});
