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
            St. Augustine was home to the first lighthouse in Florida, though the first structure fell into the ocean after its foundation eroded. The newer, current lighthouse was constructed on Anastasia Island and completed in 1874. The building received indoor plumbing in 1907 and the light was electrified in 1936 and automated in 1955. After lighthouse keepers were no longer needed, the keeper’s house began to be rented out to local residents.
    </p>
    </div>
);

export default Augustine;
