import React from 'react';

const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children} 
    </div>
);

const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={`icon fa ${props.icon} card__descriptionIcon`} />
            <div className="card__descriptionText"> 
                {props.description}
                
                {props.hint && 
                    <React.Fragment>
                        <br/> {props.hint}
                    </React.Fragment> }

            </div>
        </div>
    <div className="card__price">{props.price}</div>
</div>
);

const App = () => (
    <CardGroup>
        <Card 
            description="Trial" 
            price="Free!" 
            icon="fa-thumbs-o-up">
        </Card>
        <Card 
            description="Basic Tier"
            price="$10.00"
            icon="fa-trophy"
            hint="(most popular)">
        </Card>
        <Card 
            description="Advanced Tier"
            price="$6,000.00"
            icon="fa-bolt"
            hint="(Only for Enterise-Level Professionals)">
        </Card>
    </CardGroup>
);

export default App;
