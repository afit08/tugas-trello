const config ={
    env:process.env.NODE_ENV || 'dev',
    port : 3001,
    db_name : "bootcamp",
    db_username : "postgres",
    db_password : "1234455",
    jwtSecret : process.env.JWT_SECRET || 'Your_secret_key'
}
export default config