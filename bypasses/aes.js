module.exports = {
    aes: {
        keySize: {
            SIZE_128: 16,
            SIZE_192: 24,
            SIZE_256: 32
        },
        sbox: [99, 124, 119, 123, 242, 107, 111, 197, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV160, 82, 59, 214, 179, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188,
            182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22
        ],
        rsbox: [82, 9, 106, 213,
            4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV207, 206, 240, 180, 230, 115,
            150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV239, 160, 224, 59, 77, 174, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV125
        ],
        rotate: function(a) {
            for (var c = a[0], b = 0; 3 > b; b++) a[b] = a[b + 1];
            a[3] = c;
            return a
        },
        Rcon: [141, 1, 2, 4, 8, 16, 32, 64,
            128, 27, 54, 108, 216, 171, 77, 154, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV148, 51, 102, 204, 131, 29,
            58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV148, 51, 102, 204, 131, 29, 58, 116, 232, 203, 141, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV148, 51, 102, 204, 131, 29, 58, 116, 232, 203
        ],
        G2X: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84,
            86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 27, 25, 31, 29, 19, 17, 23, 21, 11, 9, 15, 13, 3, 1, 7, 5, 59, 57, 63, 61, 51, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV123, 121, 127, 125, 115, 113, 119, 117,
            107, 105, 111, 109, 99, 97, 103, 101, 155, 153, 159, 157, 147, 145, 151, 149, 139, 137, 143, 141, 131, 129, 135, 133, 187, 185, 191, 189, 179, 177, 183, 181, 171, 169, 175, 173, 163, 161, 167, 165, 219, 217, 223, 221, 211, 209, 215, 213, 203, 201, 207, 205, 195, 193, 199, 197, 251, 249, 255, 253, 243, 241, 247, 245, 235, 233, 239, 237, 227, 225, 231, 229
        ],
        G3X: [0, 3, 6, 5, 12, 15, 10, 9, 24, 27, 30, 29, 20, 23, 18, 17, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV123, 126, 125, 116, 119, 114, 113, 80, 83, 86, 85, 92, 95, 90, 89, 72, 75, 78, 77, 68, 71, 66, 65, 192, 195,
            198, 197, 204, 207, 202, 201, 216, 219, 222, 221, 212, 215, 210, 209, 240, 243, 246, 245, 252, 255, 250, 249, 232, 235, 238, 237, 228, 231, 226, 225, 160, 163, 166, 165, 172, 175, 170, 169, 184, 187, 190, 189, 180, 183, 178, 177, 144, 147, 150, 149, 156, 159, 154, 153, 136, 139, 142, 141, 132, 135, 130, 129, 155, 152, 157, 158, 151, 148, 145, 146, 131, 128, 133, 134, 143, 140, 137, 138, 171, 168, 173, 174, 167, 164, 161, 162, 179, 176, 181, 182, 191, 188, 185, 186, 251, 248, 253, 254, 247, 244, 241, 242, 227, 224, 229, 230, 239, 236, 233, 234, 203, 200, 205, 206, 199, 196, 193, 194, 211, 208, 213, 214, 223, 220, 217, 218,
            91, 88, 93, 94, 87, 84, 81, 82, 67, 64, 69, 70, 79, 76, 73, 74, 107, 104, 109, 110, 103, 100, 97, 98, 115, 112, 117, 118, 127, 124, 121, 122, 59, 56, 61, 62, 55, 52, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV
        ],
        G9X: [0, 9, 18, 27, 36, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV252, 245, 238, 231, 59, 50, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV241, 248, 199, 206, 213, 220, 118, 127, 100, 109, 82, 91, 64, 73, 62, 55, 44, 37, 26, 19, 8, 1, 230, 239, 244, 253,
            194, 203, 208, 217, 174, 167, 188, 181, 138, 131, 152, 145, 77, 68, 95, 86, 105, 96, 123, 114, 5, 12, 23, 30, 33, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV247, 200, 193, 218, 211, 164, 173, 182, 191, 128, 137, 146, 155, 124, 117, 110, 103, 88, 81, 74, 67, 52, 61, 38, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV106, 113, 120, 15, 6, 29, 20, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV66, 75, 80, 89, 102, 111, 116,
            125, 161, 168, 179, 186, 133, 140, 151, 158, 233, 224, 251, 242, 205, 196, 223, 214, 49, 56, 35, 42, 21, 28, 7, 14, 121, 112, 107, 98, 93, 84, 79, 70
        ],
        GBX: [0, 11, 22, 29, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV245, 196, 207, 210, 217, 123, 112, 109, 102, 87, 92, 65, 74, 35, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV246, 253, 224, 235, 218, 209, 204, 199, 174, 165, 184, 179, 130, 137, 148, 159, 70, 77, 80, 91, 106, 97, 124, 119, 30, 21, 8, 3, 50, 57, 36, 47, 141, 134, 155, 144, 161, 170, 183, 188, 213,
            222, 195, 200, 249, 242, 239, 228, 61, 54, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV185, 178, 131, 136, 149, 158, 71, 76, 81, 90, 107, 96, 125, 118, 31, 20, 9, 2, 51, 56, 37, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV100, 111, 114, 121, 72, 67, 94, 85, 1, 10, 23, 28, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV244, 197, 206, 211, 216, 122, 113, 108, 103, 86, 93, 64, 75, 34, 41, 52, 63, 14, 5, 24, 19, 202, 193, 220, 215, 230, 237, 240, 251,
            146, 153, 132, 143, 190, 181, 168, 163
        ],
        GDX: [0, 13, 26, 23, 52, 57, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV129, 150, 155, 187, 182, 161, 172, 143, 130, 149, 152, 211, 222, 201, 196, 231, 234, 253, 240, 107, 102, 113, 124, 95, 82, 69, 72, 3, 14, 25, 20, 55, 58, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV158, 213, 216, 207, 194, 225, 236, 251, 246, 214, 219, 204, 193, 226, 239, 248, 245, 190, 179, 164, 169, 138, 135, 144, 157, 6, 11, 28, 17, 50, 63, 40, 37, 110, 99, 116, 121, 90, 87, 64, 77, 218, 215,
            192, 205, 238, 227, 244, 249, 178, 191, 168, 165, 134, 139, 156, 145, 10, 7, 16, 29, 62, 51, 36, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV188, 171, 166, 133, 136, 159, 146, 217, 212, 195, 206, 237, 224, 247, 250, 183, 186, 173, 160, 131, 142, 153, 148, 223, 210, 197, 200, 235, 230, 241, 252, 103, 106, 125, 112, 83, 94, 73, 68, 15, 2, 21, 24, 59, 54, 33, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV255, 180, 185, 174, 163, 128, 141, 154, 151
        ],
        GEX: [0, 14, 28, 18, 56, 54, 36, 42, 112, 126, 108, 98, 72, 70, 84,
            90, 224, 238, 252, 242, 216, 214, 196, 202, 144, 158, 140, 130, 168, 166, 180, 186, 219, 213, 199, 201, 227, 237, 255, 241, 171, 165, 183, 185, 147, 157, 143, 129, 59, 53, 39, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV207, 229, 235, 249, 247, 77, 67, 81, 95, 117, 123, 105, 103, 61, 51, 33, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV160, 178, 188, 230, 232, 250, 244, 222, 208, 194, 204, 65, 79, 93, 83, 121, 119, 101, 107, 49, 63, 45, 35, 9, 7, 21, 27, 161, 175, 189, 179, 153, 151, 133, 139, 209, 223, 205,
            195, 233, 231, 245, 251, 154, 148, 134, 136, 162, 172, 190, 176, 234, 228, 246, 248, 210, 220, 206, 192, 122, 116, 102, 104, 66, 76, 94, 80, 10, 4, 22, 24, 50, 60, 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV215, 217, 203, 197, 239, 225, 243, 253, 167, 169, 187, 181, 159, 145, 131, 141
        ],
        core: function(a, c) {
            a = this.rotate(a);
            for (var b = 0; 4 > b; ++b) a[b] = this.sbox[a[b]];
            a[0] ^= this.Rcon[c];
            return a
        },
        expandKey: function(a, c) {
            var b = 16 *
                (this.numberOfRounds(c) + 1),
                d, f = 1,
                e = [],
                g = [];
            for (d = 0; d < b; d++) g[d] = 0;
            for (d = 0; d < c; d++) g[d] = a[d];
            for (d = 0 + c; d < b;) {
                for (var h = 0; 4 > h; h++) e[h] = g[d - 4 + h];
                0 == d % c && (e = this.core(e, f++));
                if (c == this.keySize.SIZE_256 && 16 == d % c)
                    for (h = 0; 4 > h; h++) e[h] = this.sbox[e[h]];
                for (h = 0; 4 > h; h++) g[d] = g[d - c] ^ e[h], d++
            }
            return g
        },
        addRoundKey: function(a, c) {
            for (var b = 0; 16 > b; b++) a[b] ^= c[b];
            return a
        },
        createRoundKey: function(a, c) {
            for (var b = [], d = 0; 4 > d; d++)
                for (var f = 0; 4 > f; f++) b[4 * f + d] = a[c + 4 * d + f];
            return b
        },
        subBytes: function(a, c) {
            for (var b = 0; 16 >
                b; b++) a[b] = c ? this.rsbox[a[b]] : this.sbox[a[b]];
            return a
        },
        shiftRows: function(a, c) {
            for (var b = 0; 4 > b; b++) a = this.shiftRow(a, 4 * b, b, c);
            return a
        },
        shiftRow: function(a, c, b, d) {
            for (var f = 0; f < b; f++)
                if (d) {
                    for (var e = a[c + 3], g = 3; 0 < g; g--) a[c + g] = a[c + g - 1];
                    a[c] = e
                } else {
                    e = a[c];
                    for (g = 0; 3 > g; g++) a[c + g] = a[c + g + 1];
                    a[c + 3] = e
                } return a
        },
        galois_multiplication: function(a, c) {
            for (var b = 0, d = 0; 8 > d; d++) {
                1 == (c & 1) && (b ^= a);
                256 < b && (b ^= 256);
                var f = a & 128;
                a <<= 1;
                256 < a && (a ^= 256);
                128 == f && (a ^= 27);
                256 < a && (a ^= 256);
                c >>= 1;
                256 < c && (c ^= 256)
            }
            return b
        },
        mixColumns: function(a,
            c) {
            for (var b = [], d = 0; 4 > d; d++) {
                for (var f = 0; 4 > f; f++) b[f] = a[4 * f + d];
                b = this.mixColumn(b, c);
                for (f = 0; 4 > f; f++) a[4 * f + d] = b[f]
            }
            return a
        },
        mixColumn: function(a, c) {
            var b = c ? [14, 9, 13, 11] : [2, 1, 1, 3];
            for (var d = [], f = 0; 4 > f; f++) d[f] = a[f];
            a[0] = this.galois_multiplication(d[0], b[0]) ^ this.galois_multiplication(d[3], b[1]) ^ this.galois_multiplication(d[2], b[2]) ^ this.galois_multiplication(d[1], b[3]);
            a[1] = this.galois_multiplication(d[1], b[0]) ^ this.galois_multiplication(d[0], b[1]) ^ this.galois_multiplication(d[3], b[2]) ^ this.galois_multiplication(d[2],
                b[3]);
            a[2] = this.galois_multiplication(d[2], b[0]) ^ this.galois_multiplication(d[1], b[1]) ^ this.galois_multiplication(d[0], b[2]) ^ this.galois_multiplication(d[3], b[3]);
            a[3] = this.galois_multiplication(d[3], b[0]) ^ this.galois_multiplication(d[2], b[1]) ^ this.galois_multiplication(d[1], b[2]) ^ this.galois_multiplication(d[0], b[3]);
            return a
        },
        round: function(a, c) {
            a = this.subBytes(a, !1);
            a = this.shiftRows(a, !1);
            a = this.mixColumns(a, !1);
            return a = this.addRoundKey(a, c)
        },
        invRound: function(a, c) {
            a = this.shiftRows(a, !0);
            a = this.subBytes(a,
                !0);
            a = this.addRoundKey(a, c);
            return a = this.mixColumns(a, !0)
        },
        main: function(a, c, b) {
            a = this.addRoundKey(a, this.createRoundKey(c, 0));
            for (var d = 1; d < b; d++) a = this.round(a, this.createRoundKey(c, 16 * d));
            a = this.subBytes(a, !1);
            a = this.shiftRows(a, !1);
            return a = this.addRoundKey(a, this.createRoundKey(c, 16 * b))
        },
        invMain: function(a, c, b) {
            a = this.addRoundKey(a, this.createRoundKey(c, 16 * b));
            for (--b; 0 < b; b--) a = this.invRound(a, this.createRoundKey(c, 16 * b));
            a = this.shiftRows(a, !0);
            a = this.subBytes(a, !0);
            return a = this.addRoundKey(a,
                this.createRoundKey(c, 0))
        },
        numberOfRounds: function(a) {
            switch (a) {
                case this.keySize.SIZE_128:
                    a = 10;
                    break;
                case this.keySize.SIZE_192:
                    a = 12;
                    break;
                case this.keySize.SIZE_256:
                    a = 14;
                    break;
                default:
                    return null
            }
            return a
        },
        encrypt: function(a, c, b) {
            for (var d = [], f = [], e = this.numberOfRounds(b), g = 0; 4 > g; g++)
                for (var h = 0; 4 > h; h++) f[g + 4 * h] = a[4 * g + h];
            a = this.expandKey(c, b);
            f = this.main(f, a, e);
            for (e = 0; 4 > e; e++)
                for (a = 0; 4 > a; a++) d[4 * e + a] = f[e + 4 * a];
            return d
        },
        decrypt: function(a, c, b) {
            for (var d = [], f = [], e = this.numberOfRounds(b), g = 0; 4 > g; g++)
                for (var h =
                        0; 4 > h; h++) f[g + 4 * h] = a[4 * g + h];
            a = this.expandKey(c, b);
            f = this.invMain(f, a, e);
            for (e = 0; 4 > e; e++)
                for (a = 0; 4 > a; a++) d[4 * e + a] = f[e + 4 * a];
            return d
        }
    },
    modeOfOperation: {
        OFB: 0,
        CFB: 1,
        CBC: 2
    },
    getBlock: function(a, c, b, d) {
        16 < b - c && (b = c + 16);
        return a.slice(c, b)
    },
    encrypt: function(a, c, b, d) {
        var f = b.length;
        if (d.length % 16) throw "iv length must be 128 bits.";
        var e = [],
            g = [],
            h = [],
            m = !0;
        c == this.modeOfOperation.CBC && this.padBytesIn(a);
        if (null !== a)
            for (var n = 0; n < Math.ceil(a.length / 16); n++) {
                var q = 16 * n,
                    p = 16 * n + 16;
                16 * n + 16 > a.length && (p = a.length);
                var l = this.getBlock(a, q, p, c);
                if (c == this.modeOfOperation.CFB) {
                    m ? (e = this.aes.encrypt(d, b, f), m = !1) : e = this.aes.encrypt(e, b, f);
                    for (var k = 0; 16 > k; k++) g[k] = l[k] ^ e[k];
                    for (l = 0; l < p - q; l++) h.push(g[l]);
                    e = g
                } else if (c == this.modeOfOperation.OFB) {
                    m ? (e = this.aes.encrypt(d, b, f), m = !1) : e = this.aes.encrypt(e, b, f);
                    for (k = 0; 16 > k; k++) g[k] = l[k] ^ e[k];
                    for (l = 0; l < p - q; l++) h.push(g[l])
                } else if (c == this.modeOfOperation.CBC) {
                    for (k = 0; 16 > k; k++) e[k] = l[k] ^ (m ? d[k] : g[k]);
                    m = !1;
                    g = this.aes.encrypt(e, b, f);
                    for (l = 0; 16 > l; l++) h.push(g[l])
                }
            }
        return h
    },
    decrypt: function(a, c, b, d) {
        var f = b.length;
        if (d.length % 16) throw "iv length must be 128 bits.";
        var e = [],
            g = [],
            h = [],
            m = !0;
        if (null !== a) {
            for (var n = 0; n < Math.ceil(a.length / 16); n++) {
                var q = 16 * n,
                    p = 16 * n + 16;
                16 * n + 16 > a.length && (p = a.length);
                var l = this.getBlock(a, q, p, c);
                if (c == this.modeOfOperation.CFB) {
                    if (m) {
                        var k = this.aes.encrypt(d, b, f);
                        m = !1
                    } else k = this.aes.encrypt(e, b, f);
                    for (i = 0; 16 > i; i++) g[i] = k[i] ^ l[i];
                    for (e = 0; e < p - q; e++) h.push(g[e]);
                    e = l
                } else if (c == this.modeOfOperation.OFB) {
                    m ? (k = this.aes.encrypt(d, b, f), m = !1) : k = this.aes.encrypt(e,
                        b, f);
                    for (i = 0; 16 > i; i++) g[i] = k[i] ^ l[i];
                    for (e = 0; e < p - q; e++) h.push(g[e]);
                    e = k
                } else if (c == this.modeOfOperation.CBC) {
                    k = this.aes.decrypt(l, b, f);
                    for (i = 0; 16 > i; i++) g[i] = (m ? d[i] : e[i]) ^ k[i];
                    m = !1;
                    for (e = 0; e < p - q; e++) h.push(g[e]);
                    e = l
                }
            }
            c == this.modeOfOperation.CBC && this.unpadBytesOut(h)
        }
        return h
    },
    padBytesIn: function(a) {
        for (var c = 16 - a.length % 16, b = 0; b < c; b++) a.push(c)
    },
    unpadBytesOut: function(a) {
        var c = 0,
            b = -1;
        if (16 < a.length) {
            for (var d = a.length - 1; d >= a.length - 1 - 16; d--) {
                if (16 >= a[d]) {
                    -1 == b && (b = a[d]);
                    if (a[d] != b) {
                        c = 0;
                        break
                    }
                    c++
                } else break;
                if (c == b) break
            }
            0 < c && a.splice(a.length - c, c)
        }
    }
};
