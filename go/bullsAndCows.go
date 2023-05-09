func getHint(secret string, guess string) string {
   bulls := 0
   cows := 0
   secret_arr := strings.Split(secret, "")
   guess_arr := strings.Split(guess, "")
   secret_map := make(map[string][]int)
   guess_map := make(map[string][]int)
   for i := 0; i < len(secret); i++ {
       if secret_arr[i] == guess_arr[i] {
           bulls++
       } else {
           secret_map[secret_arr[i]] = append(secret_map[secret_arr[i]], i)
           guess_map[guess_arr[i]] = append(guess_map[guess_arr[i]], i)
       }   
   }
       fmt.Println(secret_map)
       fmt.Println(guess_map)
   for key, _ := range secret_map {
       if len(secret_map[key]) < len(guess_map[key]) {
           cows+=len(secret_map[key])
       } else {
           cows+=len(guess_map[key])
       }
   }
    result := fmt.Sprintf("%dA%dB", bulls, cows)
    return result
}
