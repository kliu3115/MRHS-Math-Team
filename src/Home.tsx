const Home = () => {
    //<img src={'https://mrhsnews.com/wp-content/uploads/2023/10/IMG_8301-1.jpg'} height = "300" width = "400"/>
    return (
        <div className = "home">
            <h2>Welcome to the MRHS Math Team!</h2>
            <br />
            <h2> HCML #2 Interest Form is out! Please fill out the Google Form if you would like to participate! </h2>
            <h3> When: 10/16 from 2:35pm - 5:00pm</h3>
            <h3>Where: Room 220</h3>
            <h2 className="emphasis"><a style={{color: 'blue'}} href="https://forms.gle/F7D1P8zY4p1GztK5A"> https://forms.gle/F7D1P8zY4p1GztK5A </a></h2>
            <br />
            <h2> General Information: </h2>
            <h3> Teams will likely be posted in <a href='/hcml-teams'> HCML Teams</a> sometime on Monday/Tuesday so check back then! </h3>
            <br />
            <h3> The meet will be held virtually so we can take 30 people since transportation will not be an issue. </h3>
            <br />
            <h3> If you are not competing, there will be no meeting this week so please enjoy your week off! We will pick up next week, 10/23 and go over the problems from HCML 2! </h3>           
        </div>    
    )
}

export default Home;