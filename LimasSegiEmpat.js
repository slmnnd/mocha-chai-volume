function volume (Sisi1, Sisi2, Tinggi){
if(Sisi1 === undefined || Sisi1 === null) throw 'parameter harus diisi'
if(Sisi2 === undefined || Sisi2 === null) throw 'parameter harus diisi'
if(Tinggi === undefined || Tinggi === null) throw 'parameter harus diisi'


const result = ((Sisi1 * Sisi2) * Tinggi)/3
return result
}

export default volume