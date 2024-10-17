const Home = () => {
    //<img src={'https://mrhsnews.com/wp-content/uploads/2023/10/IMG_8301-1.jpg'} height = "300" width = "400"/>
    return (
        <div className = "home">
            <h2>Welcome to the MRHS Math Team!</h2>
            <br />
            <h2> UMD Math Competition Interest Form is out! Please fill out the Google Form if you would like to participate! </h2>
            <h3> When: 10/22 during 5th & 6th period</h3>
            <h3>Where: Room 220</h3>
            <h2 className="emphasis"><a style={{color: 'blue'}} href="https://forms.gle/t5gRsRVt7pyjt5r89"> https://forms.gle/t5gRsRVt7pyjt5r89 </a></h2>
            <br />
            <h2> General Information: </h2>
            <h3> Test Format & Length: 25 Multiple Choice, 75 Minutes </h3>
            <br />
            <h3> This test is recommended for anyone who wants to take AMC in mid-November as they are very similar in format. </h3>
            <br />
            <h3> Although there aren't many past UMD Math Competitions released, there are tons of past AMC exams available, so you can always use those to study! :) </h3>           
        </div>    
    )
}

export default Home;