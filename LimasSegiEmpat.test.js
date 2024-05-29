import volume from "./LimasSegiEmpat.js"; 
import { expect } from "chai";

describe('menghitung volume limas segi empat', function(){
    //positive
    it('menghitung volume dengan angka bulat', function(){
        const Sisi1 = 5;
        const Sisi2 = 5;
        const Tinggi = 6;
        const hasil = volume(Sisi1, Sisi2, Tinggi)
        console.log(hasil)

        //assert
        expect(hasil).to.equal(50)
    })

    //negative
    it('menghitung volume dengan nilai tinggi adalah kosong', function(){
        const Sisi1 = 5;
        const Sisi2 = 5;
        // const Tinggi = '';
        
        const hasil = function(){
            volume(Sisi1, Sisi2)  
        }          

        //assert
        expect(hasil).to.throw('parameter harus diisi')
    })

    //negative
    it('menghitung volume dengan angka negatif', function(){
        const Sisi1 = 5;
        const Sisi2 = -5;
        const Tinggi = 6;
        const hasil = volume(Sisi1, Sisi2, Tinggi)
        console.log(hasil)

        //assert
        expect(hasil).to.be.equal(-50)
    })

    //negative
    it('menghitung volume dengan semua nilai 0', function(){
        const Sisi1 = 0;
        const Sisi2 = 0;
        const Tinggi = 0;
        const hasil = volume(Sisi1, Sisi2, Tinggi)
        console.log(hasil)

        //assert
        expect(hasil).to.be.equal(0)
    })
})