if status is-interactive
    # Commands to run in interactive sessions can go here
end
alias ls="lsd"
alias gc="git clone"
alias gcm="git commit -m"
alias gp="git push -u origin main"
alias blank="ssh -i ~/.ssh/blank_2k"
alias flushdns="sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder; say cache flushed"
alias cproj="python3 ~/code/examples/project.py"
alias gc="git clone"

export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion⏎