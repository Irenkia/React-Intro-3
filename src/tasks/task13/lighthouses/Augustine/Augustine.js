import React from 'react';
import photo2 from '../.../../../assets/imgTask13/Augustine.jpg';

const Augustine = () => (
    <div className='preview'>
        <h2>The St. Augustine Light, Florida</h2>
        <figure>
            <img src={photo2} alt="Augustine lighthouse" />
            <figcaption>Photo: Kim Young Seng</figcaption>
        </figure>
        <p>
            <br>St. Augustine was home to the first lighthouse in Florida, </br>
            <br> though the first structure fell into the ocean after </br>
            <br>its foundation eroded. The newer, current lighthouse was </br>
            <br>constructed on Anastasia Island and completed in 1874.</br>
            <br>The building received indoor plumbing in 1907 and the  </br>
            <br>light was electrified in 1936 and automated in 1955.</br>
            <br>After lighthouse keepers were no longer needed, the </br>
            <br>keeper’s house began to be rented out to local residents.</br>
        </p>
    </div>
);

export default Augustine;
