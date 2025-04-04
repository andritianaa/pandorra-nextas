import { InviteFriendDialog } from '@/app/(main)/explore/invite-friend-dialog';
import { MenuList } from '@/components/(main)/explore/menu-list';
import { PublicationContent } from '@/components/(main)/explore/PublicationContent';
import { RotatingVideosBanner } from '@/components/(main)/explore/rotating-video-banner';

export default function RoutePage() {
  return (
    <div className="mt-4">
      <RotatingVideosBanner />
      <MenuList />
      <InviteFriendDialog />
      <PublicationContent />
    </div>
  )
}
