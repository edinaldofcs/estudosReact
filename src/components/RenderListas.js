function RenderListas({ itens, pessoas }) {

    return (
        <>
            <h3>-----Lista------</h3>
            {pessoas.length > 0 ? (

                pessoas.map((gente, index) => (
                    <p key={index}>O {gente.nome} tem {gente.idade} anos</p>

                ))

            )
                : (
                    itens.map((item, index) => (
                        <p key={index}> {item} </p>

                    ))
                )
            }



        </>
    )
}

export default RenderListas