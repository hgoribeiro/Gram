package gram.com.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import gram.com.Model.User;
import gram.com.Model.DTOs.Requests.SignUpDTORequest;
import gram.com.Model.DTOs.Requests.SignInDTORequest;
import gram.com.Model.DTOs.Responses.LoggedUserDtoResponse;
import gram.com.Model.Emuns.UserRoles;
import gram.com.Security.TokenService;
import gram.com.Services.GramService;
import gram.com.Services.Mensages;

@CrossOrigin(origins = "http://localhost:5174")
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
    public ResponseEntity login(@RequestBody @Validated SignInDTORequest request) {

        /*
         * É possível fazer a comparação direta da senha solicitada via requisição com a
         * senha encriptada do banco de dados sem a utilização do
         * UsernamePasswordAuthenticationToken e sim do PasswordEncoder . Para isso,
         * encripte primeiro a senha que
         * veio da requisição e depois utilize o encoder.matches() do PasswordEncoder
         * passando as duas
         * senhas como parâmetro. Desse modo, não precisando do método
         * AuthenticationManager configurado na classe de SecurityConfigurations. A
         * comparação direta te permite realizar HTTPSresposes personalizadas
         */

        UsernamePasswordAuthenticationToken userpass = new UsernamePasswordAuthenticationToken(request.email(),
                request.password());
        Authentication authentication = this.authenticationManager.authenticate(userpass);
        var token = tokenService.generatedToken((User) authentication.getPrincipal());

        return ResponseEntity.ok(new LoggedUserDtoResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<Mensages> signup(@RequestBody @Validated SignUpDTORequest request) {
        User user = service.findByLoginOrEmail(request.login(), request.email());
        if (user !=null) {
            System.out.println(user);
            return new ResponseEntity<Mensages>(new Mensages("Usuário já existe"), HttpStatus.BAD_REQUEST);
        }

        String encryptedPass = new BCryptPasswordEncoder().encode(request.password());
        user = new User(request.login(), request.email(), encryptedPass, UserRoles.USER, request.name(),
                request.lastname());
        // o cadastro feito pelo add é sempre de
        // "user". Cadastros de Admin são feitos
        // manualmente no banco de dados

        service.addUser(user);
        return ResponseEntity.ok().build();

    }

    @GetMapping("/find/{user}")
    public User findUsuario(@PathVariable String user){
        return service.findByLogin(user);
        
    }

    @GetMapping("/vac")
    public String vac() {
        return "true";
    }

}
