import React, {Component} from 'react';
import "../PlantAdd/style.css"

class AddButton extends Component {
    render () {
        console.log("Props", this.props.plantState)
        return(
            <div></div>
        )
    }
}

// function AddButton() {
//     return (
//         <div>
//             <div class="list-group">
//                 <ul class="list-group list-group-flush">
//                     <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
//                         <div class="d-flex w-100 justify-content-between">
//                             <h5 class="mb-1">Add Plant</h5>
//                         </div>
//                         <p class="mb-1">Choose from a list of common garden plants to add to your personal collection here.</p>
//                     </a>
//                     <a href="#" class="list-group-item list-group-item-action flex-column align-items-start disabled">
//                         <div class="d-flex w-100 justify-content-between">
//                             <h5 class="mb-1">Add Custom Plant</h5>
                            
//                         </div>
//                         <small>Feature Coming Soon!</small>
//                         <p class="mb-1">Don't see your plant in our list? Add a custom plant to your collection here.</p>
                        
//                     </a>
//                 </ul>
//             </div>
//         </div>
//     )
// }

export default AddButton;