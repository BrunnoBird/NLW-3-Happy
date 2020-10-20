const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {  //async e await = quando chega no final não precisa colocar um .then
    // inserir dados na tabela
     await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name:"Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: 14998193131,
        images: [
            "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1581701391032-33cb5e7b44fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            
        ].toString(),
        instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    //  deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))    

})