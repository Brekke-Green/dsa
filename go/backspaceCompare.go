func backspaceCompare(s string, t string) bool {
   s_stack := []byte{}
   t_stack := []byte{}

   s_stack = processBackspace(s, s_stack)
   t_stack = processBackspace(t, t_stack)

   return bytes.Equal(s_stack, t_stack)
}
func processBackspace(str string, stack []byte) []byte {
   for i := 0; i < len(str); i++ {
      if str[i] == 35 && len(stack) > 0 {
         stack[len(stack) - 1] = 0
         stack = stack[:len(stack) - 1]
      } else {
         if str[i] != 35 {
            stack = append(stack, str[i])
         }
      }
      fmt.Println(stack)
   }
   return stack
}
