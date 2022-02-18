export default {
    name: 'testi',
    title: 'Kesan',
    type: 'document',
    fields:[
        {
            name: 'nama',
            title: 'Nama',
            type: 'string'
        },
        {
            name: 'perusahaan',
            title: 'Perusahaan',
            type: 'string'
        },
        {
            name: 'urlgambar',
            title: 'URLGambar',
            type: 'image',
            options:{
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
    ],
}