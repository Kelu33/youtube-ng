import { Channel } from "src/models/channel.model";
import { Video } from "src/models/video.model";

export const CHANNELS: Channel[] = [
    new Channel(
        'Joueur Du Grenier',
        'https://yt3.ggpht.com/ytc/AKedOLSWR1xukO50JE75bCYQsJWt9MAKaE3rplxdauP6=s176-c-k-c0x00ffffff-no-rj',
        'https://www.youtube.com/user/joueurdugrenier/videos', 
    [ 
        new Video(
            'https://i.ytimg.com/vi/V7lHNwP3pes/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDx-OTmYGYeZWsXFrt79OBHV5MfJw',
            'Joueur du grenier ( Hors-série) - RESIDENT EVIL',
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
            true,
            'Game'
        )
    ]
    ),
    new Channel(
        'Mickaël Launay',
        'https://yt3.ggpht.com/ytc/AKedOLTX1suKh2H0NYY5N4Kj_wDIylqaKeV6zJ4_qcl8cA=s176-c-k-c0x00ffffff-no-rj',
        'https://www.youtube.com/c/Micmaths', 
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
        'https://yt3.ggpht.com/gap8M4A3Aqslp_qihbC6pA42WDIX7MBT9Buf9RChhqO7mhhNntge8SQ65w-yw02OeBujNwO5OA=s176-c-k-c0x00ffffff-no-rj',
        'https://www.youtube.com/channel/UCG4ei7sWX6m2itTEhbWQmuA', 
    [ 
        new Video(
            'https://i.ytimg.com/vi/ewRjZoRtu0Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDavvt86fx5V3vnSMQuUT8opBNcTg',
            'M.I.A. - Paper Planes',
            'https://www.youtube.com/watch?v=ewRjZoRtu0Y',
            301,
            new Date(),
            false,
            'Music'
        ),
        new Video(
            '',
            '',
            '',
            301,
            new Date(),
            false,
            'Music'
        ),
        new Video(
            '',
            '',
            '',
            301,
            new Date(),
            false,
            'Music'
        )
    ]
    )
]