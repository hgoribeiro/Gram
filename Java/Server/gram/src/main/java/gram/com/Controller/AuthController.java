package gram.com.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import gram.com.Model.User;
import gram.com.Model.UserRoles;
import gram.com.Model.DTOs.Requests.SignUpDTORequest;
import gram.com.Model.DTOs.Requests.UserDTORequest;
import gram.com.Model.DTOs.Responses.LoggedUserDtoResponse;
import gram.com.Security.TokenService;
import gram.com.Services.GramService;

@CrossOrigin (origins= "http://localhost:5176")
@RestController
@RequestMapping("/login")
public class AuthController {

    @Autowired
    private GramService service;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/auth")
    public ResponseEntity login(@RequestBody @Validated UserDTORequest request) {

        /*
         * É possível fazer a comparação direta da senha solicitada via requisição com a
         * senha encriptada do banco de dados sem a utilização do
         * UsernamePasswordAuthenticationToken e sim do PasswordEncoder . Para isso,
         * encripte primeiro a senha que
         * veio da requisição e depois utilize o encoder.matches() do PasswordEncoder passando as duas
         * senhas como parâmetro. Desse modo, não precisando do método
         * AuthenticationManager configurado na classe de SecurityConfigurations. A
         * comparação direta te permite realizar HTTPSresposes personalizadas
         */

        UsernamePasswordAuthenticationToken userpass = new UsernamePasswordAuthenticationToken(request.login(),
                request.password());
        Authentication authentication = this.authenticationManager.authenticate(userpass);
        var token = tokenService.generatedToken((User)authentication.getPrincipal());
        
        
        return  ResponseEntity.ok(new LoggedUserDtoResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody @Validated SignUpDTORequest request) {
        if (service.loadUserByUsername(request.login()) != null)
            return ResponseEntity.badRequest().build();

        String encryptedPass = new BCryptPasswordEncoder().encode(request.password());
        User user = new User(request.login(), encryptedPass, UserRoles.USER); // o cadastro feito pelo add é sempre de
                                                                              // "user". Cadastros de Admin são feitos
                                                                              // manualmente
        service.addUser(user);
        return ResponseEntity.ok().build();

    }

    @GetMapping("/finduser/{user}")
    public ResponseEntity<?> findUsuario(@PathVariable String user) throws InterruptedException {
        return service.findByLogin(user);
    }

    @GetMapping("/vac")
    public String vac() {
        return "true";
    }

}
