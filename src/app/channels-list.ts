import { Channel } from "src/models/channel.model";
import { Video } from "src/models/video.model";

export const CHANNELS: Channel[] = [
    new Channel(
        'Joueur Du Grenier',
        '/assets/img/channel-img/jdg.jpg',
        'joueurdugrenier', 
    [ 
        new Video(
            'https://i.ytimg.com/vi/V7lHNwP3pes/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDx-OTmYGYeZWsXFrt79OBHV5MfJw',
            'Joueur du grenier ( Hors-série) - RESIDENT EVIL avec un titre super long pour tester le css',
            'https://www.youtube.com/watch?v=V7lHNwP3pes',
            301,
            new Date('6/21/2021'),
            false,
            'Game'
        ),
        new Video(
            'https://i.ytimg.com/vi/Cpke7ZnJJvA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjlkT6eHb6seQqgxM4sQFG744YNA',
            'Joueur du grenier - CASTLEVANIA',
            'https://www.youtube.com/watch?v=Cpke7ZnJJvA',
            301,
            new Date('10/25/2017'),
            false,
            'Game'
        )
    ]
    ),
    new Channel(
        'Mickaël Launay',
        '/assets/img/channel-img/micmaths.jpg',
        'Micmaths', 
    [ 
        new Video(
            'https://i.ytimg.com/vi/8D_ThIqoJL8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsYJBX7ORf10071OsDCWyvwYDsqw',
            'L\'étonnant puzzle fractal de von Koch - Micmaths',
            'https://www.youtube.com/watch?v=8D_ThIqoJL8',
            301,
            new Date('3/4/2022'),
            false,
            'Science'
        ),
        new Video(
            'https://i.ytimg.com/vi/tYf3CpbqAVo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-KzvoWc6qECIRUIVxn22lu_bZrA',
            'Le calcul qui divise : 6÷2(1+2) - Micmaths',
            'https://www.youtube.com/watch?v=tYf3CpbqAVo',
            301,
            new Date('2/3/2022'),
            false,
            'Science'
        )
    ]
    ),
    new Channel(
        'M.I.A.',
        '/assets/img/channel-img/mia.jpg',
        'mia', 
    [ 
        new Video(
            'https://i.ytimg.com/vi/ewRjZoRtu0Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDavvt86fx5V3vnSMQuUT8opBNcTg',
            'M.I.A. - Paper Planes',
            'https://www.youtube.com/watch?v=ewRjZoRtu0Y',
            301,
            new Date('2/3/2009'),
            false,
            'Music'
        ),
        new Video(
            'https://i.ytimg.com/vi/r-Nw7HbaeWY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXPEC6sHmmigvlb7uK3QoVcuZuHg',
            'M.I.A. - Borders',
            'https://www.youtube.com/watch?v=r-Nw7HbaeWY',
            301,
            new Date('2/11/2016'),
            false,
            'Music'
        ),
        new Video(
            'https://i.ytimg.com/vi/3Yuqxl284cg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7kWgXoD9y39pJoPXSB9qJvq61kg',
            'M.I.A. - Bad Girls',
            'https://www.youtube.com/watch?v=3Yuqxl284cg',
            301,
            new Date('2/11/2012'),
            false,
            'Music'
        )
    ]
    )
]