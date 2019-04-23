var svr = "http://portal.pkuschool.edu.cn:81/adobe/"
var dest = [ //Files List
    [ //Windows
        "Adobe%20Acrobat%20DC%20_Win_X64.zip",
        "Ae_Win64.zip",

        "Ai_win64.zip",
        "An_win64.zip",
        "Au_Win64.zip",
        "Br_win64.zip",
        "Dw_Win64.zip",
        "IC_Win64.zip",
        "ID_win64.zip",
        "Lr_Win64.zip",
        "Me_Win64.zip",
        "Pl_win64.zip",
        "Pr_win64.zip",
        "Adobe%20PS%20CC%202018%20_Win_x64.zip",
        "Sc_Win64.zip"
    ],
    [ //mac
        "Adobe_Acrobat_DC_Pro_Mac_X64.zip",
        "Ae_Mac.zip",
        "Ai_Mac.zip",
        "An_Mac.zip",
        "Au_Mac.zip",
        "Br_Mac.zip",
        "Dw_Mac.zip",
        "IC_Mac.zip",
        "ID_Mac.zip",
        "Lr_Mac.zip",
        "Me_Mac.zip",
        "Pl_Mac.zip",
        "Pr_Mac.zip",
        "Adobe%20PS%20CC%202018%20_Mac_x64.zip",
        "Sc_Mac.zip"
    ]
]
if (!window.open) {
    console.warn('Some critical functions are not there. Function may ba limited.')
}

function dl(type = -1, id = -1) { //
    if (type != -1 && id != -1) {
        try {
            window.open(svr + dest[type][id], '_self');
            console.log("Initiated download at " + svr + dest[type][id])
        } catch {
            M.Toast({
                html: '调用错误：type=' + type + ' id=' + id
            })
            console.error('Unexpected type or ID: type=' + type + ' id=' + id)
        }

    }

}