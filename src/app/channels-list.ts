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
            2842416,
            new Date('6/21/2021'),
            false,
            'Game'
        ),
        new Video(
            'https://i.ytimg.com/vi/Cpke7ZnJJvA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjlkT6eHb6seQqgxM4sQFG744YNA',
            'Joueur du grenier - CASTLEVANIA',
            'https://www.youtube.com/watch?v=Cpke7ZnJJvA',
            2840889,
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
            188118,
            new Date('3/4/2022'),
            false,
            'Science'
        ),
        new Video(
            'https://i.ytimg.com/vi/tYf3CpbqAVo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-KzvoWc6qECIRUIVxn22lu_bZrA',
            'Le calcul qui divise : 6÷2(1+2) - Micmaths',
            'https://www.youtube.com/watch?v=tYf3CpbqAVo',
            2816687,
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
            237307460,
            new Date('2/3/2009'),
            false,
            'Music'
        ),
        new Video(
            'https://i.ytimg.com/vi/r-Nw7HbaeWY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXPEC6sHmmigvlb7uK3QoVcuZuHg',
            'M.I.A. - Borders',
            'https://www.youtube.com/watch?v=r-Nw7HbaeWY',
            27010023,
            new Date('2/11/2016'),
            false,
            'Music'
        ),
        new Video(
            'https://i.ytimg.com/vi/3Yuqxl284cg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7kWgXoD9y39pJoPXSB9qJvq61kg',
            'M.I.A. - Bad Girls',
            'https://www.youtube.com/watch?v=3Yuqxl284cg',
            52081518,
            new Date('2/11/2012'),
            false,
            'Music'
        )
    ]
    ),
    new Channel(
        'Thinkerview',
        '/assets/img/channel-img/thinker.jpg',
        'thinkerview', 
        [
            new Video(
                'https://i.ytimg.com/vi/5ysUySSNW3M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcNKezzaSzVykvVcgJ7hJ0LA3scg',
                'Crise de l\'eau, planète terre invivable ? Emma Haziza [EN DIRECT]',
                'https://www.youtube.com/watch?v=5ysUySSNW3M',
                306609111,
                new Date('5/17/2022'),
                false,
                'Ecologie'
            ), 
            new Video(
                'https://i.ytimg.com/vi/F7S76vLLzMk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm8A073xnYnxby3o_ji1kB9tuNEQ',
                'Nucléaire : Choc énergétique, inflationniste, écologique ? Nicolas Nace & Gilles Babinet [EN DIRECT]',
                'https://www.youtube.com/watch?v=F7S76vLLzMk',
                375760,
                new Date('6/13/2022'),
                false,
                'Ecologie'
            ), 
            new Video(
                'https://i.ytimg.com/vi/1DJ3qTW51FA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwEahe6P-GTQOG9vWgx7agzVC9uA',
                'Le hacking au XXIe siècle ? Zax et Doomer [EN DIRECT]',
                'https://www.youtube.com/watch?v=1DJ3qTW51FA',
                644901,
                new Date('9/24/2021'),
                false,
                'Science'
            ), 
            new Video(
                'https://i.ytimg.com/vi/KJQl--wHQSM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdxEegAvznz9KITNUKqftCdQnG_g',
                'Étienne Klein : la structure fondamentale de la matière : le boson de higgs [EN DIRECT]',
                'https://www.youtube.com/watch?v=KJQl--wHQSM',
                1862,
                new Date(),
                true,
                'Science'
            )        
        ]
    ),
    new Channel(
        'LEntourloop',
        '/assets/img/channel-img/lentourloop.jpg',
        'lentourloop', 
        [
            new Video(
                'https://i.ytimg.com/vi/HIZ16f6hQ-k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNOhQLAk7FEgSHs_y2gy0laod6vg',
                'L\'ENTOURLOOP - Florilège Ft. Lyricson, Queen Omega & Red Fox (Official Video)',
                'https://www.youtube.com/watch?v=HIZ16f6hQ-k',
                719280,
                new Date('3/30/2022'),
                false,
                'Music'
            )     
        ]
    ),
    new Channel(
        'Panda Dub',
        '/assets/img/channel-img/pandadub.jpg',
        'panda-dub', 
        [
            new Video(
                'https://i.ytimg.com/vi/04b3bun5FoQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQar_doD9lCp0J7RvV28a3vEkBoQ',
                'Panda Dub - The Lost Ship - 5 - Planet pillow',
                'https://www.youtube.com/watch?v=04b3bun5FoQ',
                183902,
                new Date('4/15/2015'),
                false,
                'Music'
            ), 
            new Video(
                'https://i.ytimg.com/vi/g-dkCjhxaMk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlTDbuy3ePU2KR3xHvAzflCJ39tg',
                '02 - Panda Dub (Psychotic Symphony) - Smile is the Ke(Y)',
                'https://www.youtube.com/watch?v=g-dkCjhxaMk',
                403707,
                new Date('1/1/2013'),
                false,
                'Music'
            )       
        ]
    ),
    new Channel(
        'BLAST, Le souffle de l\'info',
        '/assets/img/channel-img/blast.jpg',
        'blast', 
        [
            new Video(
                'https://i.ytimg.com/vi/mtpanIOCRQw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfMrHiZ2aAfpLDdiwVVGhinQhV5g',
                'TAY : L\'INTELLIGENCE ARTIFICIELLE DEVENUE NAZIE EN 24H SUR TWITTER',
                'https://www.youtube.com/watch?v=mtpanIOCRQw',
                145122,
                new Date('6/17/2022'),
                false,
                'Science'
            ), 
            new Video(
                'https://i.ytimg.com/vi/VQ5lp71udvY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpRguJhcElt56r75CXdmpdOoI6pQ',
                'UNE PREMIÈRE : DES SCIENTIFIQUES FORMENT LES DÉPUTÉS SUR L\'URGENCE ÉCOLOGIQUE',
                'https://www.youtube.com/watch?v=VQ5lp71udvY',
                28056,
                new Date('6/24/2022'),
                false,
                'Ecologie'
            )       
        ]
    ),
    new Channel(
        'Hvdes',
        '/assets/img/channel-img/hvdes.jpg',
        'hvdes', 
        [
            new Video(
                'https://i.ytimg.com/vi/MATnuCxKgFA/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBq1hDEexT_UPMMxsfQf_qkVmnuow',
                'R U Afraid',
                'https://www.youtube.com/watch?v=MATnuCxKgFA&list=OLAK5uy_m8J7JIDuH4tNxIdvCAlj_nzcrjklW3fWQ&index=2',
                226882,
                new Date('8/16/2018'),
                false,
                'Music'
            )      
        ]
    ),
    new Channel(
        'New',
        'https://via.placeholder.com/150',
        'new', 
        [
            new Video(
                'https://via.placeholder.com/338x189',
                'new video',
                '/',
                301,
                new Date(),
                false,
                'new'
            ), 
            new Video(
                'https://via.placeholder.com/338x189',
                'new Live',
                '/',
                301,
                new Date(),
                true,
                'live'
            )       
        ]
    )
]