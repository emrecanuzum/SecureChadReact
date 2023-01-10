let count = 0;
const rev_sbox = [
    0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb,
    0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb,
    0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e,
    0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25,
    0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92,
    0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84,
    0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06,
    0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b,
    0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73,
    0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e,
    0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b,
    0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4,
    0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f,
    0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef,
    0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61,
    0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d];
const sbox =   [ 
//0     1    2      3     4    5     6     7      8    9     A      B    C     D     E     F
0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, //0
0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, //1
0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, //2
0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, //3
0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, //4
0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, //5
0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, //6
0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, //7
0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, //8
0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, //9
0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, //A
0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, //B
0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, //C
0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, //D
0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, //E
0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16 
];

const Rcon = [0x01,0x02,0x04,0x81,0x10,0x20,0x40,0x80,0x1b,0x36];

function mix(s) {
    for (let c=0; c<4; c++) {
        const a = new Array(4);  // 'a' is a copy of the current column from 's'
        const b = new Array(4);  // 'b' is a•{02} in GF(2^8)
        for (let r=0; r<4; r++) {
            a[r] = s[c][r];
            b[r] = s[c][r]&0x80 ? s[c][r] << 1 ^ 0x011b : s[c][r]<<1;
        }
        // a[n] ^ b[n] is a•{03} in GF(2^8)
        s[c][0] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3]; // {02}•a0 + {03}•a1 + a2 + a3
        s[c][1] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3]; // a0 • {02}•a1 + {03}•a2 + a3
        s[c][2] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3]; // a0 + a1 + {02}•a2 + {03}•a3
        s[c][3] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3]; // {03}•a0 + a1 + a2 + {02}•a3
    }
    return s;
}

function plainstring(plain) {
    let encrypted_text = ''
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            encrypted_text += (plain[i][j].toString(16).length === 2) ? plain[i][j].toString(16) : '0' + plain[i][j].toString(16);
        }
    }
    return encrypted_text
}

function getKey(string) {
    let key =[[],[],[],[]]
    let ind = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {

            key[i][j] = parseInt(string.substring(ind,ind+2),16)
            ind +=2;
        }
        
    }

    ind = 0
    return key
}

export function hexconvert(message) {
    let hex = ''
    for (let index = 0; index < message.length; index++) {
        if(message.charCodeAt(index).toString(16).length === 1) {
            hex += '000' + message.charCodeAt(index).toString(16)
        }
        if(message.charCodeAt(index).toString(16).length === 2) {
            hex += '00' + message.charCodeAt(index).toString(16)
        }
        if(message.charCodeAt(index).toString(16).length === 3) {
            hex += '0' + message.charCodeAt(index).toString(16);
            continue;
        }
        else if(message.charCodeAt(index).toString(16).length === 4) {
            hex += message.charCodeAt(index).toString(16);
        }
    }
    if(parseInt(hex.length % 32) !== 0) {

        for (let index = 0; parseInt(hex.length % 32) !== 0; index++) {
            hex += '00'
        }
    }
    return hex;
}
function row_shift(Array){
    let temp = Array[0][1];
    ///////////////
    Array[0][1]= Array[1][1];
    Array[1][1]= Array[2][1];
    Array[2][1]= Array[3][1];
    Array[3][1] = temp;
    //////////////////////
    temp = Array[0][2];
    Array[0][2]= Array[1][2];
    Array[1][2]= Array[2][2];
    Array[2][2]= Array[3][2];
    Array[3][2] = temp;
    temp = Array[0][2];
    Array[0][2]= Array[1][2];
    Array[1][2]= Array[2][2];
    Array[2][2]= Array[3][2];
    Array[3][2] = temp;
    ////////////////////
    temp = Array[0][3];
    Array[0][3]= Array[1][3];
    Array[1][3]= Array[2][3];
    Array[2][3]= Array[3][3];
    Array[3][3] = temp;

    temp = Array[0][3];
    Array[0][3]= Array[1][3];
    Array[1][3]= Array[2][3];
    Array[2][3]= Array[3][3];
    Array[3][3] = temp;

    temp = Array[0][3];
    Array[0][3]= Array[1][3];
    Array[1][3]= Array[2][3];
    Array[2][3]= Array[3][3];
    Array[3][3] = temp;

    return Array;
}
function inverse_row(Array) {
    ///////////////
    let temp = Array[0][1];
    Array[0][1]= Array[1][1];
    Array[1][1]= Array[2][1];
    Array[2][1]= Array[3][1];
    Array[3][1] = temp;

    temp = Array[0][1];
    Array[0][1]= Array[1][1];
    Array[1][1]= Array[2][1];
    Array[2][1]= Array[3][1];
    Array[3][1] = temp;
    temp = Array[0][1];
    Array[0][1]= Array[1][1];
    Array[1][1]= Array[2][1];
    Array[2][1]= Array[3][1];
    Array[3][1] = temp;

    //////////////////
    temp = Array[0][2];
    Array[0][2]= Array[1][2];
    Array[1][2]= Array[2][2];
    Array[2][2]= Array[3][2];
    Array[3][2] = temp;
    temp = Array[0][2];
    Array[0][2]= Array[1][2];
    Array[1][2]= Array[2][2];
    Array[2][2]= Array[3][2];
    Array[3][2] = temp;

    ///////////////////
    temp = Array[0][3];
    Array[0][3]= Array[1][3];
    Array[1][3]= Array[2][3];
    Array[2][3]= Array[3][3];
    Array[3][3] = temp;

    return Array;
}
export function KeyExpansion(鍵){
    var key = new Array(4);

    
    for (var i = 0; i < 4; i++) {
        key[i] = new Array(4);
    }
    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < 4; y++) {
            
            key[i][y] = parseInt(鍵.substring(count,count+2), 16);
            count += 2;
        }
    }
    count = 0;

    for(let round = 0;round < 10;round++) {
        
        var temp = new Array (parseInt(鍵.substring(鍵.length - 6,鍵.length - 4), 16),parseInt(鍵.substring(鍵.length - 4,鍵.length - 2), 16),
                              parseInt(鍵.substring(鍵.length - 2,鍵.length), 16),parseInt(鍵.substring(鍵.length - 8,鍵.length-6), 16)
                              );
        // B-)Substitute Table
        for (let index = 0; index < 4; index++) {
            temp[index] = sbox[temp[index]];
        }

        temp[0] ^= Rcon[round];

        for (let i = 0; i < 4; i++) {
            
            for (let j = 0; j < 4; j++) {
                temp[j] = temp[j] ^ key[i][j];
                鍵 += (temp[j].toString(16).length === 2) ? temp[j].toString(16) : '0' + temp[j].toString(16);
                key[i][j] = temp[j];
            }
        }
    }

    return 鍵;

}

export function AES_128_Encryption(本文,鍵) {
    /*************************************************************************** */
    var plain = new Array(4);
    for (var i = 0; i < 4; i++) {
        plain[i] = new Array(4);
    }
    
    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < 4; y++) {
            plain[i][y] = parseInt(本文.substring(count,count+2),16);
            count += 2;
        }
    }
    let key = getKey(鍵.substring(0,32));
    count = 0;

    //Adding round key
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            plain[i][j] = plain[i][j] ^ key[i][j];
            count +=2
        }
    }
    count = 0;
    //9 round
    for (let round = 0; round < 9; round++) {

            //substitution table
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    plain[i][j] = sbox[plain[i][j]];
                    
                }
            }
            //row shifting//
            plain = row_shift(plain)

            //Mix Column
            plain = mix(plain);
            //*************************************************************************** */
            key = getKey(鍵.substring(32 * (round+1),32 * (round+2)))
            //add n'th round key
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    plain[i][j] = plain[i][j] ^ key[i][j];
                    count+=2;
                }
            }
            count = 0;

    }
    ///// Last Round
    ///sbox
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            plain[i][j] = sbox[plain[i][j]];
        }
    }
    //row shifting//
    plain = row_shift(plain)
    ///////////////////////////////
    //Add last round key
    key = getKey(鍵.substring(鍵.length - 32,鍵.length));
    count = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            plain[i][j] = plain[i][j] ^ key[i][j];
            count+=2;
        }
    }
    count = 0;
    
    /////////////////////////////////
    return plainstring(plain);

}

export function AES_128_Decryption(本文,鍵){

    var plain = new Array(4);
    for (var i = 0; i < 4; i++) {
        plain[i] = new Array(4);
    }
    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < 4; y++) {
            plain[i][y] = parseInt(本文.substring(count,count+2),16);
            count += 2;
        }
    }
    
    // ADD Round Key
    let key = getKey(鍵.substring(鍵.length - 32,鍵.length))
    count = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            plain[i][j] = plain[i][j] ^ key[i][j];
            count+=2;
        }
    }
        plain = inverse_row(plain)
        
        // 2-) inverse sbox
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                plain[i][j] = rev_sbox[plain[i][j]];
            }
        }
    count = 0;

    /* LOOP*/
    for (let round = 0; round < 9; round++) {
        let key = getKey(鍵.substring(鍵.length - (32 * (round+2)) ,鍵.length - (32 * (round+1))))
         //3-)add round key
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                plain[i][j] = plain[i][j] ^ key[i][j];
                count+=2;
            }
        }
        count = 0;
        //Inverse Mix
        plain = mix(plain)
        plain = mix(plain)
        plain = mix(plain)

        //inverse row
        plain = inverse_row(plain)
        
        // 2-) inverse sbox
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                plain[i][j] = rev_sbox[plain[i][j]];
            }
        }
        
    }

    key = getKey(鍵.substring(0,32))
    for (let i = 0; i < 4; i++) {
        
        for (let j = 0; j < 4; j++) {
            
            plain[i][j] = plain[i][j] ^ key[i][j];;
            count+=2;
        }
    }
    count = 0
    return plainstring(plain)
}




