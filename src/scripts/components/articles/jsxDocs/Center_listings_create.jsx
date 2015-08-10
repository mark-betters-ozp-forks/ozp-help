// Automatically Generated Module
var React = require('react');
module.exports = React.createClass({
render: function(){
<div>

<h1>Create a Listing</h1>

<p>Anyone can create a listing. Only stewards can approve them. This section explains how to create a listing and it defines each field on the Create/Edit Listing Form.</p>

<p>To create a listing:</p>

<p>From the Global Toolbar, click the drop-down Main Menu:</p>

<p><img alt="Submit a listing" src="../mocks/Doc_images/submit-a-listing.png" style="height: 316px; width: 207px" title="Submit a listing" /></p>

<ol>
	<li>Select <b>Submit a Listing</b></li>
	<li>The Listing Create/Edit Form opens. To save the listing as a draft, you must enter a <b>Name, Type and Owner</b>.<br />
	<i>At this point, you may save the listing without completing it. If you do this, you can open it from your Profile and Listing Management which are accessible from the drop-down Main Menu on the Global Toolbar.</i></li>
	<li>Complete the listing. All fields are required unless marked optional.</li>
	<li>Click <img alt="Save" src="../mocks/Doc_images/save.png" style="height: 30px; width: 33px" title="Save" /> at the top of the form to save. The save icon switches to a green checkmark after saving.</li>
	<li>To preview the listing, click <img alt="show" src="../mocks/Doc_images/show-icon.png" style="height: 35px; width: 45px" title="show" />.</li>
	<li>When you are ready to publish the listing, click <img alt="Send the listing to a steward for review" src="../mocks/Doc_images/send-to-steward.png" style="height: 39px; width: 49px" title="Send the listing to a steward for review" /> to notify the Organizational Steward that the listing is ready for review.&nbsp;You must complete all required fields&nbsp;before submitting the listing.<br />
	<i>Find steward approval instructions in the </i><a href="Center_listingManagementPage_orgSteward.html">Steward Management section</a>.</li>
	<li>After an organizational steward and Center steward approve the listing, it will appear in Center.</li>
</ol>

<h3><a id="submitListing" name="submitListing">Submit</a> a Listing</h3>

<p>After creating a listing, a Center and Org Steward must approve it. Follow the instructions in the <a href="#createListing">Create a Listing section</a> to submit the listing. After approval by both stewards, your listing will appear in Center.</p>

<h2>Fields on the Create/Edit <a id="form" name="form">Form</a></h2>

<p>The following fields appear on the Create/Edit Listing Form:<br />
&nbsp;</p>

<h3>Basic Listing Information</h3>

<p><img alt="Basic Listing Information section of the Create/Edit Listing Form" src="../mocks/Doc_images/Create-Edit-Listing-Form-BasicInfo.png" style="height: 503px; width: 624px" title="Enter Basic Listing Information" /><br />
<b>Basic Listing Information</b><br />
<br>
<table border="1" cellpadding="2" cellspacing="2" style="width: 100%; text-align: left">
	<tbody>
		<tr>
			<td><b>Field</b></td>
			<td><b>Description</b></td>
			<td><b>Additional Information</b></td>
		</tr>
		<tr>
			<td>Name</td>
			<td>The name/title of the listing.</td>
			<td>Names are not required to be unique within the system.</td>
		</tr>
		<tr>
			<td>Listing Type</td>
			<td>The listing technology description (e.g. Widget, Web Application).</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Categories</td>
			<td>The categories associated with the listing used to group them. Stewards can add and remove categories as needed.</td>
			<td>A listing can be associated with multiple categories.</td>
		</tr>
		<tr>
			<td>Tags</td>
			<td>
			<p>A list of user generated words used to describe the listing.</p>

			<ul>
				<li>Tags influence search results.</li>
				<li>Tags appear on the Details tab on the Detailed View.</li>
			</ul>
			</td>
			<td>Owners and stewards add tags from the Create/Edit Form.</td>
		</tr>
		<tr>
			<td>Full Description</td>
			<td>
			<p>This field can contain 4,000 characters. To make it easier for users to determine the nature of the listing, a succinct summary should be captured in the first few lines of the description.</p>
			</td>
			<td>The full description appears on the Overview tab of the listing&#39;s Detailed View.</td>
		</tr>
		<tr>
			<td>Short<br />
			Description</td>
			<td>This 100 character description appears when a user hovers over a listing on the Search and Discovery Page.</td>
			<td>This description can differ from the full description.</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<h3>Listing Details</h3>

<p><img alt="Create/Edit Listing Form -- Listing Details" src="../mocks/Doc_images/Create-Edit-Listing-Form-ListingDetails.png" style="height: 462px; width: 624px" title="Create/Edit Listing Form -- Listing Details" /><br />
<b>Create/Edit Listing Form -- Listing Details</b><br />
&nbsp;</p>

<table border="1" cellpadding="2" cellspacing="2" style="width: 100%; text-align: left">
	<tbody>
		<tr>
			<td><b>Field</b></td>
			<td><b>Description</b></td>
			<td><b>Additional Information</b></td>
		</tr>
		<tr>
			<td>Version Number</td>
			<td>An identifier used to distinguish one version from another.</td>
			<td>This is a free text field.</td>
		</tr>
		<tr>
			<td>Listing URL</td>
			<td>The address where users can access the listing.</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Usage Requirements</td>
			<td>A list of any required dependencies.</td>
			<td>Example: This listing requires Adobe Flash and functions best in IE9 or newer browsers.</td>
		</tr>
		<tr>
			<td>What&rsquo;s New (optional)</td>
			<td>A message from the owner or a steward</td>
			<td>Example: This release enhanced the search features and corrected a bug with editing.</td>
		</tr>
		<tr>
			<td>Intents</td>
			<td>Intents are the instructions for carrying out a listing&rsquo;s intentions.</td>
			<td>There are three main aspects of intents:
			<ul>
				<li>Action</li>
				<li>Data Type</li>
				<li>Send/Receive</li>
			</ul>

			<p><i>*To add&nbsp;a new intent, contact the&nbsp;Center Steward.</i></p>
			</td>
		</tr>
		<tr>
			<td>Singleton</td>
			<td>Singletons are listings that you can launch only one instance of&nbsp;on the Webtop.</td>
			<td>Most applications can be added and opened to the Webtop multiple times. Singletons&nbsp;cannot. If you only want one instance of the listing open on the Webtop, make it a Singleton.</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<h3>Resources</h3>

<p><img alt="Create Edit Listing Form Resources" src="../mocks/Doc_images/Create-Edit-Listing-Form-Resources.png" style="height: 251px; width: 624px" title="Create Edit Listing Form Resources" /></p>

<p><b>Create/Edit Listing Form -- Resources</b></p>

<table border="1" cellpadding="2" cellspacing="2" style="width: 100%; text-align: left">
	<tbody>
		<tr>
			<td><b>Field</b></td>
			<td><b>Description</b></td>
			<td><b>Additional information</b></td>
		</tr>
		<tr>
			<td>Resources (optional)</td>
			<td>Links to tools that will help people use the listing</td>
			<td>Examples: User Guides, reference sites</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;The next section of the form houses information about all the graphics in the listing. To make the listing more useful, add graphics that help users understand what the listing does and how to use it.<br />
<br />
<i>Note: Images must be smaller than 1MiB (1.048576 megabytes). Specific pixel size restrictions appear on the Listing Create/Edit Form.</i></p>

<h3>&nbsp;Graphics</h3>

<p><img alt="Create Edit Listing Form -- Graphics Section" src="../mocks/Doc_images/Create-Edit-Listing-Form-Graphics.png" style="height: 414px; width: 624px" title="Create Edit Listing Form -- Graphics Section" /></p>

<p><b>Create/Edit Listing Form: Graphics</b></p>

<p>The following figure displays the large and small banner icons on the Search and Discovery Page:<br />
<br />
<img alt="Large and Small Banner Image Examples" src="../mocks/Doc_images/lg-sm-banner-image.png" style="height: 351px; width: 457px" title="Large and Small Banner Image Examples" /><br />
<b>Large and Small Banner Image Examples</b></p>

<table border="1" cellpadding="2" cellspacing="2" style="width: 100%; text-align: left">
	<tbody>
		<tr>
			<td><b>Field</b></td>
			<td><b>Description</b></td>
			<td><b>Additional information</b></td>
		</tr>
		<tr>
			<td>Small Icon</td>
			<td>Used to identify the listing in Webtop.</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Large Icon</td>
			<td>Appears in the upper-left corner of the listing&rsquo;s Detailed View</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Small Banner</td>
			<td>This icon appears on the Search and Discovery Page in the New Arrivals and Most Popular sections. Also, this icon appears in the search results.</td>
			<td>
			<p>It is the most common view users will have of a listing.</p>
			</td>
		</tr>
		<tr>
			<td>Large Banner</td>
			<td>When a listing is featured on the Search and Discovery Page, this icon appears.</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Screenshots</td>
			<td>Houses the images that appear in the Overview tab on the listing&rsquo;s Detailed View.</td>
			<td>You can add infinite screenshots. The system asks for a:
			<ul>
				<li>Preview Image<br />
				<i>Appears on the Overview tab</i></li>
				<li>Full Size Image<br />
				<i>Opens outside the Overview tab after a user clicks the Preview Image</i></li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>

<h3>Owners &amp; Contacts</h3>

<p>The next section of the Create/Edit Form addresses owners and contacts. This establishes who is responsible for the listing, who can see it in Center and who should be contacted regarding it:</p>

<p><img alt="Create/Edit Listing Form: Owners &amp; Contacts Section" src="../mocks/Doc_images/Create-Edit-Listing-Form-Owner-Contact-Section.png" style="height: 273px; width: 624px" title="Create/Edit Listing Form: Owners &amp; Contacts Section" /><br />
<b>Create/Edit Listing Form: Owners &amp; Contacts Section</b></p>

<table border="1" cellpadding="2" cellspacing="2" style="width: 100%; text-align: left">
	<tbody>
		<tr>
			<td><b>Field</b></td>
			<td><b>Description</b></td>
			<td><b>Additional information</b></td>
		</tr>
		<tr>
			<td>Associated Organization</td>
			<td>Use this field to identify which organization will see the listing in Center.</td>
			<td>A drop-down list displays all organizations.</td>
		</tr>
		<tr>
			<td>Owners</td>
			<td>Pre-populated with the name of the person who creates the listing, ownership can be reassigned by typing a new owner&rsquo;s name in the owner field on the listing page.</td>
			<td>
			<ul>
				<li>To add more than one listing owner, type the name of the next owner after selecting the first one.</li>
			</ul>

			<ul>
				<li>Only a listing&rsquo;s owner(s) and content stewards can edit the listing.</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>Contacts</td>
			<td>A field that can contain the contact&rsquo;s information that the submitter wishes to enter (e.g., email, phone).</td>
			<td>
			<ul>
				<li>Click Add to associate more&nbsp;than one contact with a listing.</li>
			</ul>

			<ul>
				<li>The Center steward decides if&nbsp;the contact type&nbsp;is optional or required.</li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>


<h2>Related Info</h2>
<ul style="margin-left: 40px">
	<li><a href="Center_listings_overview.html">Listing Overview</a></li>
	<li><a href="Center_listings_reviews.html">Review a Listing</a></li>
	<li><a href="Center_listings_edit.html">Edit a Listing</a></li>
	<li><a href="Center_listingManagementPage_orgSteward.html">Org Steward: Listing Management Page</a></li>
	</ul>

</div>
}
});
