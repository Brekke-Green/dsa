func isSubsequence(s string, t string) bool {
   if len(s) > len(t) {
       return false
   }
   pointer := 0
   char := 0
   for pointer <= len(t) - 1 {
       if char >= len(s) {
           return true
       }
       letter_s := s[char]
       letter_t := t[pointer]
       if letter_s == letter_t {
           char++
           pointer++
       } else {
           pointer++
       }
   }
   if char == len(s) {
       return true
   } else {
       return false
   }
}
