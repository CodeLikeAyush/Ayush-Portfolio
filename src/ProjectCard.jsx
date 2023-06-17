import * as React from 'react';
import './index.css';



export default function ImgMediaCard() {
    return (
        <div class="card mx-auto " style={{ width: "18rem" }}>
            {/* <img src="https://picsum.photos/200/100" class="card-img-top" alt="..." /> */}
            <iframe src="https://mern-frontend-ayush.netlify.app/profile" allowfullscreen frameborder="0"></iframe>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <hr />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" class="btn ">View on GitHub</a> */}
                {/* <div className="btnDiv"> */}
                <button href="#" className="btn btn-sm my-3">View on Github</button>
                {/* </div> */}
            </div>
        </div>
    );
}

