//to initial type variables from props (interface,type)
type SalamProps = {
    nama : String,
    jumlahPesan : number,
    isLogin : boolean
}

const Pesan = (props : SalamProps) => {
    return (
        <div>
            <h1>
                {
                    props.isLogin ? `Selamat datang ${props.nama} anda memiliki pesan ${props.jumlahPesan}` : 'anda belum login'
                }            
            </h1>
        </div>
    )
}

export default Pesan;
