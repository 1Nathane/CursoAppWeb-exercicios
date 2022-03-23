function temParam(param){
  return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
  console.log('Atenção total!')
}else{
  console.log('Tranquilo!!!')
}

  console.log(`Quantidade de parametros passados: ${process.argv.length - 2}`)
