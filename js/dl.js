// var dest = [ //Files List
//     [ //Windows
//         "Adobe%20Acrobat%20DC%20_Win_X64.zip",
//         "Ae_Win64.zip",
//         "Ai_win64.zip",
//         "An_win64.zip",
//         "Au_Win64.zip",
//         "Br_win64.zip",
//         "Dw_Win64.zip",
//         "IC_Win64.zip",
//         "ID_win64.zip",
//         "Lr_Win64.zip",
//         "Me_Win64.zip",
//         "Pl_win64.zip",
//         "Pr_win64.zip",
//         "Adobe%20PS%20CC%202018%20_Win_x64.zip",
//         "Sc_Win64.zip"
//     ],
//     [ //mac
//         "Adobe_Acrobat_DC_Pro_Mac_X64.zip",
//         "Ae_Mac.zip",
//         "Ai_Mac.zip",
//         "An_Mac.zip",
//         "Au_Mac.zip",
//         "Br_Mac.zip",
//         "Dw_Mac.zip",
//         "IC_Mac.zip",
//         "ID_Mac.zip",
//         "Lr_Mac.zip",
//         "Me_Mac.zip",
//         "Pl_Mac.zip",
//         "Pr_Mac.zip",
//         "Adobe%20PS%20CC%202018%20_Mac_x64.zip",
//         "Sc_Mac.zip"
//     ]
// ]

//Template:
/*
{
    name: '',
    short: '',
    icon: '',
    win: '',
    mac: ''
},
*/

const softwareList = [
    {
        name: 'Acrobat <small>Pro DC</small>',
        short: 'acr',
        icon: 'acrobat.png',
        win: 'Adobe%20Acrobat%20DC%20_Win_X64.zip',
        mac: 'Adobe_Acrobat_DC_Pro_Mac_X64.zip'
    },
    {
        name: 'After Effects',
        short: 'ae',
        icon: 'Ae.png',
        win: 'Ae_Win64.zip',
        mac: 'Ae_Mac.zip'
    },
    {
        name: 'Illustrator',
        short: 'ai',
        icon: 'Ai.png',
        win: 'Ai_Win64.zip',
        mac: 'Ai_Mac.zip'
    },
    {
        name: 'Audition',
        short: 'au',
        icon: 'Au.png',
        win: 'Au_Win64.zip',
        mac: 'Au_Mac.zip'
    },
    {
        name: 'Animator',
        short: 'an',
        icon: 'An.png',
        win: 'An_Win64.zip',
        mac: 'An_Mac.zip'
    },
    {
        name: 'Bridge',
        short: 'br',
        icon: 'Br.png',
        win: 'Br_Win64.zip',
        mac: 'Br_Mac.zip'
    },
    {
        name: 'Dreamweaver',
        short: 'dw',
        icon: 'Dw.png',
        win: 'Dw_Win64.zip',
        mac: 'Dw_Mac.zip'
    },
    {
        name: 'InCopy',
        short: 'ic',
        icon: 'Ic.png',
        win: 'IC_Win64.zip',
        mac: 'IC_Mac.zip'
    },
    {
        name: 'InDesign',
        short: 'id',
        icon: 'Id.png',
        win: 'ID_Win64.zip',
        mac: 'ID_Mac.zip'
    },
    {
        name: 'Lightroom <small>Classic</small>',
        short: 'lr',
        icon: 'Lr.png',
        win: 'Lr_Win64.zip',
        mac: 'Lr_Mac.zip'
    },
    {
        name: 'Media Encoder',
        short: 'me',
        icon: 'Me.png',
        win: 'Me_Win64.zip',
        mac: 'Me_Mac.zip'
    },
    {
        name: 'Prelude',
        short: 'pl',
        icon: 'Pl.png',
        win: 'Pl_Win64.zip',
        mac: 'Pl_Mac.zip'
    },
    {
        name: 'Premiere Pro',
        short: 'pr',
        icon: 'Pr.png',
        win: 'Pr_Win64.zip',
        mac: 'Pr_Mac.zip'
    },
    {
        name: 'Photoshop',
        short: 'ps',
        icon: 'Ps.png',
        win: 'Adobe%20PS%20CC%202018%20_Win_x64.zip',
        mac: 'Adobe%20PS%20CC%202018%20_Mac_x64.zip'
    },
    {
        name: 'Scan',
        short: 'sc',
        icon: 'Sc.png',
        win: 'Sc_Win64.zip',
        mac: 'Sc_Mac.zip'
    },

]
// function dl(type = -1, id = -1) {
//     if (type != -1 && id != -1) {
//         try {
//             M.toast({
//                 html: '即将开始下载: ' + dest[type][id]
//             })
//             window.open(svr + dest[type][id], '_self')
//             console.log("Initiated download at " + svr + dest[type][id]);

//         } catch(e) {
//             M.toast({
//                 html: '调用错误：type=' + type + ' id=' + id + " - " + e
//             })
//             console.error('Dl: Error: type=' + type + ' id=' + id + " - " + e)
//         }

//     }

// }

// function cpy(type = -1, id = -1) {
//     if (type != -1 && id != -1) {
//         try {

//             var cpybtn = document.getElementById('copybtn');
//             cpybtn.setAttribute('data-clipboard-text', svr + dest[type][id])
//             cpybtn.click();
//             M.toast({
//                 html: '复制完成: ' + dest[type][id]
//             })
//             console.log("Initiated link copy at " + svr + dest[type][id])

//         } catch (e) {
//             M.toast({
//                 html: '复制调用错误：type=' + type + ' id=' + id + " - " + e
//             })
//             console.error('Cpy: Error: type=' + type + ' id=' + id + " - " + e)
//         }

//     }
// }
