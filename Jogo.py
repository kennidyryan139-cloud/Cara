nome = str(input("qual e o seu nome: "))
print(f"""o jogador {nome} vai encontrar 
[1] Dragão
[2] goblin""")
while True:
 escolha = int(input("qual vai ser: "))
 if escolha == 1:
   personagem = "Dragao"
   break
 elif escolha == 2:
   personagem = "goblin"
   break
 else:
   print("opção invalída!")
  
vidaJogador = 100
inimigo = 0
while vidaJogador == 0 or inimigo == 0:
  print(f"""voçê vai querer atacar ou curar do {personagem}
  [1] atacar
  [2] curar""")
  opcao = int(input("qual vai ser: "))
  if opcao == 1:
    inimigo = inimigo - 20
    print(f"voce atacou sua vida {vidaJogador} a vida do inimigo {inimigo}")
  elif opcao == 2:
    if vidaJogador == 100:
     break
    else:
      vidaJogador = vidaJogador + 20
      print(f"voce esta com {vidaJogador} de cida")

    
  