var whichType = score = 0;
var ticTacArray = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
];

function ticTac(obj) {
    let current_id = obj.id;
    checkDataAvalibe = document.getElementById(current_id).innerText;
    keys = current_id.split('');
    first_key = parseInt(keys[0]);
    second_key = parseInt(keys[1]);
    
    if(whichType == 0 && checkDataAvalibe == '') {
        whichType = 1;
        document.getElementById(current_id).innerText = "O";
        ticTacArray[first_key][second_key] = "O";
    } else if(whichType == 1 && checkDataAvalibe == '') {
        whichType = 0;
        document.getElementById(current_id).innerText = "X";
        ticTacArray[first_key][second_key] = "X";
    }
    destroy();
}   


function destroy() {
    console.table(ticTacArray);
    for( let i=0; i<ticTacArray.length; i++) {
        for( let j=0; j<ticTacArray.length; j++) {
            if ( (ticTacArray[0][0] == 'O' && ticTacArray[0][1] == 'O' && ticTacArray[0][2] == 'O') || (ticTacArray[0][0] == 'X' && ticTacArray[0][1] == 'X' && ticTacArray[0][2] == 'X') ) {
                applyColer('00','01','02');
            } else if ( (ticTacArray[1][0] == 'O' && ticTacArray[1][1] == 'O' && ticTacArray[1][2] == 'O') || (ticTacArray[1][0] == 'X' && ticTacArray[1][1] == 'X' && ticTacArray[1][2] == 'X') ) {
                applyColer('10','11','12');
            } else if ( (ticTacArray[2][0] == 'O' && ticTacArray[2][1] == 'O' && ticTacArray[2][2] == 'O') || (ticTacArray[2][0] == 'X' && ticTacArray[2][1] == 'X' && ticTacArray[2][2] == 'X') ) {
                applyColer('20','21','22');
            } else if ( (ticTacArray[0][0] == 'O' && ticTacArray[1][0] == 'O' && ticTacArray[2][0] == 'O') || (ticTacArray[0][0] == 'X' && ticTacArray[1][0] == 'X' && ticTacArray[2][0] == 'X') ) {
                applyColer('00','10','20');
            } else if ( (ticTacArray[0][1] == 'O' && ticTacArray[1][1] == 'O' && ticTacArray[2][1] == 'O') || (ticTacArray[0][1] == 'X' && ticTacArray[1][1] == 'X' && ticTacArray[2][1] == 'X') ) {
                applyColer('01','11','21');
            } else if ( (ticTacArray[0][2] == 'O' && ticTacArray[1][2] == 'O' && ticTacArray[2][2] == 'O') || (ticTacArray[0][2] == 'X' && ticTacArray[1][2] == 'X' && ticTacArray[2][2] == 'X') ) {
                applyColer('02','12','22');
            } else if ( (ticTacArray[0][0] == 'O' && ticTacArray[1][1] == 'O' && ticTacArray[2][2] == 'O') || (ticTacArray[0][0] == 'X' && ticTacArray[1][1] == 'X' && ticTacArray[2][2] == 'X') ) {
                applyColer('00','11','22');
            } else if ( (ticTacArray[0][2] == 'O' && ticTacArray[1][1] == 'O' && ticTacArray[2][0] == 'O') || (ticTacArray[0][2] == 'X' && ticTacArray[1][1] == 'X' && ticTacArray[2][0] == 'X') ) {
                applyColer('02','11','20');
            }
        }
    }
}


function applyColer(id_1, id_2, id_3) {
    document.getElementById(id_1).style.backgroundColor = 'green';
    document.getElementById(id_2).style.backgroundColor = 'green';
    document.getElementById(id_3).style.backgroundColor = 'green'; 
    
    console.log("sss");
    document.getElementById('score_count').innerText = score;
    setTimeout(function(){
        for( let i=0; i<ticTacArray.length; i++) {
            for( let j=0; j<ticTacArray.length; j++) {
                id = String(i)+String(j);
                document.getElementById(id).innerHTML = '<b>a</b>';
            }
        }
        document.getElementById(id_1).style.backgroundColor = 'black';
        document.getElementById(id_2).style.backgroundColor = 'black';
        document.getElementById(id_3).style.backgroundColor = 'black';
        ticTacArray = [
            [[],[],[]],
            [[],[],[]],
            [[],[],[]],
        ];
    },1200);
}




