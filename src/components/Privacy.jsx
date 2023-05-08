import React from 'react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <div className='privacy'>
      <h2 style={{textAlign:'center', marginBottom:30}}>Our Privacy policy</h2>
         <h4>  SAVE LIVES</h4> <p>is a organisation or a system for connecting those 
in need of emergency blood transfusions with volunteers who
are willing to donate blood.
The website's visitors or users while contacting blood donors 
must follow terms
The website's visitors must access the information it offers 
and contact the list of donors.
The details of the donors are displayed only to facilitate the users for 
contacting them when in need of blood in case of any emergency.</p>
<h4>CONTENT</h4>
<p>Information on the sit 
It Is provided for information purposes only.
The information Is not shared with third parties.
The donors who have provided us with the donor information 
on this website have the sole right to either keep providing us 
with the information or to withdraw it at any time.
Any inaccuracy in the information provided on the website is 
not our responsibility.
Any misuse of the contact information on the website is not 
our responsibility. You can reach us at 
datasupport@savelives.org if you believe that your contact 
information is being misuse</p>
<h4>EXTERNAL LINKS</h4>
<p>Links to other websites or resources may be included on Save 
Lives only for the users' convenience. Save Lives does not 
encourage, warrant, or guarantee the information, goods, or 
services described or off ered in these external sites, and it is 
also not responsible for their content. The user is responsible 
for reading the copyright and licencing conditions of any linked 
pages and obtaining any necessary permissions.
SAVE LIVES RIGHT
The website's features, information, and other elements are all 
subject to change, modification, or discontinuation at any time 
by Save Lives. Save Lives reserves the right to gather, examine, 
and disseminate information about how all of its users use the 
website</p>
<Link to='/'> <button style={{marginTop:20, width:100}} className='home_btn btn' >Go back</button>
            </Link>
          
    </div>
  )
}

export default Privacy