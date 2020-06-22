import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {



    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);

    if ( !hero ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

//     if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
//         alert('hello world');
//       }

//       window.onhashchange = function() {
//     if (window.innerDocClick) {
//         window.innerDocClick = false;
//     } else {
//         if (window.location.hash != '#undefined') {
//             goBack();
//         } else {
//             history.pushState("", document.title, window.location.pathname);
//             location.reload();
//         }
//     }
// }

// window.addEventListener('popstate', function(event) {
//     // The popstate event is fired each time when the current history entry changes.

//     var r = alert("You pressed a Back button! Are you sure?!");

//     if (r == true) {
//         // Call Back button programmatically as per user confirmation.
//         history.back();
//         // Uncomment below line to redirect to the previous page instead.
//         // window.location = document.referrer // Note: IE11 is not supporting this.
//     } else {
//         // Stay on the current page.
//         history.pushState(null, null, window.location.pathname);
//     }

//     history.pushState(null, null, window.location.pathname);

// }, false);

// window.addEventListener('popstate', function (e) {
//     var state = e.state;
//     if (state !== null) {
//         //load content with ajax
//         alert("You pressed a Back button! Are you sure?!");
//     }
// });

// if(performance.navigation.type == 2)
// {
//     //Do your code here
//     alert("You pressed a Back button! Are you sure?!");
// }

// if (history.pushState) {
//     //Chrome and modern browsers
//     history.pushState(null, document.title, history.location.href);
//     window.addEventListener('popstate', function (event) {
//         history.pushState(null, document.title, history.location.href);
//     });
// }
// else {
//     //IE
//     history.forward();
// }


// var perfEntries = performance.getEntriesByType("navigation");
// for (var i = 0; i < perfEntries.length; i++) {
//     console.log(perfEntries[i].type);
// }

// if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
//     alert('hello world');
//   }

//   history.pushState(null, null, history.location.href);
//     window.onpopstate = function () {
//         history.go(1);
//     };

// window.addEventListener('popstate', function (e) {
//     var state = e.state;
//     if (state !== null) {
//         //load content with ajax
//     }
// });

    // const handleGoBack = () => {
    //     if(history.goBack()) {
    //         console.log('SE dio click para atras')
    //     }    
    // }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    
    return (
        <div className="row mt-5">
            {/* {handleGoBack()} */}
            <div className="col-4">
                <img 
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
