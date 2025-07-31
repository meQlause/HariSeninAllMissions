export interface userRegisterDTO {
    nama_lengkap: string
    jenis_kelamin: gender
    no_hp: number
    email: string
    kata_sandi: string
    profil_pict?: string
}

export interface userVerifyDTO {
    email: string
    token: string
}

export interface userLoginDTO {
    email: string
    kata_sandi: string
}

type gender = "male" | "female"