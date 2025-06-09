**Ticket**: https://new-relic.atlassian.net/browse/NR-123

## What & Why

A few lines of explaining what problem you're solving and the relevant context

## Callouts

Any critical paths that should be reviewed with extra care (changing data queries, tricky code paths, etc.)

## Testing

Instructions on how to test your change, links to sample pages or apps on dev/staging, impersonation links, what things need to be booted up, configs or settings that need adjusting, and context on what to look for (screenshots are helpful)

Links to Figma or other UI design assets to verify against are also super helpful here

Nested test plan (cool use of markdown, but not strictly necessary, flat todo lists are 100% a-okay):
- [ ] Test 1:
    - [ ] Test methods with reference and new behavior if possible
- [ ] Test 2:
    - [ ] Test methods with reference and new behavior if possible
- [ ] Test n:
    - [ ] Test methods with reference and new behavior if possible
     
### Builds

If changes were made to the iOS app:
- [ ] The `builds/mainagenttestapp.zip` file was regenerated

If changes were made to the Android app:
- [ ] The `builds/mainagenttestapp.apk` file was regenerated
