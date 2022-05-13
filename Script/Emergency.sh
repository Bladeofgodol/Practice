                                ##!!!!!FOR EMERGENCY USE ONLY!!!!!##
echo "---custom emergency recovory---";

#[basic chrooting]
starter(){
    echo "mounting crucial parts";
    cd /
    mount -t /dev/sda7 /mnt
    mount -t /dev/sda6 /mnt/home
    mount -t proc proc /mnt/proc
    mount -t sysfs sys /mnt/sys
    mount -o bind /dev /mnt/dev
    echo "chrooting!!";
    chroot /mnt
    options
}

#[kernel recovory]
kernel_recovery(){
        read -p "this will start updating the system. Do you want to continue(y/n)" yn
        case $yn in
            [Yy]* ) pacman -Su; break;;
            [Nn]* ) options;;
            * ) echo "Please answer yes or no."; kernel_recovery;;
        esac
        
    }

#[grub recovery]
grub_recovery(){
    pacman -S grub; 
}
#[options]
options(){
    echo "-----Make sure you have internet connectivity!!!!----";
    echo "1-kernel recovery";
    echo "2-grub recovery";
    echo "3-proper exit";
    while [ 0 -eq 0 ]
    do
        read option
        if ((option == 1))
        then
            kernel_recovery
            options
        elif ((option == 2))
        then
            grub_recovery
            options
        elif ((option == 3))
        then
            umount -l /mnt/{home,proc,sys,dev}
            exit
        else
            echo "please select the proper option";
        fi
    done
}

starter
    