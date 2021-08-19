import React from 'react';

function Scores(){
    

    return(
        <div>
            <form>
                <label>
                    <input type="radio" name="information_score" value="1" onchange="putIntoLocalStorage()"/>
                </label>
                <label>
                    <input type="radio" name="information_score" value="2" onchange="putIntoLocalStorage()"/>2
                </label>
                <label>
                    <input type="radio" name="information_score" value="3" onchange="putIntoLocalStorage()"/>3
                </label>
                <label>
                    <input type="radio" name="information_score" value="4" onchange="putIntoLocalStorage()"/>4
                </label>
                <label>
                    <input type="radio" name="information_score" value="5" onchange="putIntoLocalStorage()"/>5
                </label>
                <label>
                    <input type="radio" name="information_score" value="6" onchange="putIntoLocalStorage()"/>6
                </label>
                <label>
                    <input type="radio" name="information_score" value="7" onchange="putIntoLocalStorage()"/>7
                </label>
                <label>
                    <input type="radio" name="information_score" value="8" onchange="putIntoLocalStorage()"/>8
                </label>
                <label><
                    input type="radio" name="information_score" value="9" onchange="putIntoLocalStorage()"/>9
                </label>
                <label>
                    <input type="radio" name="information_score" value="10" onchange="putIntoLocalStorage()"/>10
                </label>
            </form>
        </div>
    )
}


export default Scores;