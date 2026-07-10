function Hero({headline, description}){
    return(
        <>
            <section style={{backgroundColor:'tan', padding: '20px'}}>
                <h2>{headline}</h2>

                <p>{description}</p>
            </section>
        </>
    );
}

export default Hero;